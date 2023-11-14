import Page from 'flarum/components/Page';
import LinkButton from 'flarum/common/components/LinkButton';
import swal from 'sweetalert';
import CommentReplyModal from './MyEditorModal';
import { fetchCsrfToken } from './CsrfToken';
import EditWikiModal from './EditPostModal';
import AddWikiModal from './MyEditorModal';
import Trix from "trix"
import CustomDropdown from './DropdownEdit';
import SomeOtherComponent from './DropdownEdit';
import CommentReplyEditModal from './postreplyedit';
import TextEditor from 'flarum/components/TextEditor';

export default class discussion extends Page {
  data = [];
  categoryList = []
  sub_categoryList = []
  url = app.forum.attribute('apiUrl');
  selectedCategoryIndex = 0
  oninit(vnode) {
    super.oninit(vnode);
    // <========== post title view ===================>
    this.postData = null;
    this.commentList = [];
    this.isPostLike = false;
    // <========== post title view ===================>




    // Step 1: API se data fetch karna
    fetch(`${app.forum.attribute('apiUrl')}/post/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken,
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        this.data = data.data;
        let isdata = data.data.filter(val => val.post.length > 0)
        if (isdata.length > 0) {
          let first_slug = isdata[0].post[0].slug

          this.selectedCategoryIndex = first_slug
          this.handlePostShow(first_slug)
        }
        // this.categoryList = data.data.category;
        m.redraw();
      });
  }
  //  <----------- post view title functions --------------->
  onPostDelete = async () => {
    swal({
      title: 'Are you sure, you want to delete?',
      icon: 'warning',
      dangerMode: true,
      buttons: ['Cancel', 'OK'],
    }).then(async (willDelete) => {
      if (willDelete) {
        const csrfToken = await fetchCsrfToken();
        fetch(`${app.forum.attribute('apiUrl')}/post/delete/${this.postData.id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': csrfToken,
          },
        })
          .then((response) => response.json())
          .then((response) => {

            swal('deleted successfully');
            var baseUrl = app.forum.attribute('baseUrl');
            window.location.href = baseUrl;

          });
      }
    });
  }
  onPostEdit() {
    app.modal.show(EditWikiModal, { postId: this.postData });
  }

  onPostLike() {
    this.postData.like = !this.postData.like;
    this.postData.likes_count = this.postData.like ? Number(this.postData.likes_count) + 1 : Number(this.postData.likes_count) - 1;
    fetch(`${app.forum.attribute('apiUrl')}/post/like/${this.postData.post_id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((response) => { });
  }
  onPostComment() {
    console.log("testtt");
    const updatePostComment = (newComment) => {
      console.log(this.commentList);
      console.log(newComment);
      this.commentList = [...this.commentList, newComment[0]];
    };

    app.modal.show(CommentReplyModal, { postId: this.postData.id, commentFor: true, updatePostComment: updatePostComment });
  }
  onCommentLike = (id, index, user_reaction) => {

    const comment = this.commentList[index];

    if (!comment) return; // Exit if comment doesn't exist

    // Handling "like" action
    if (user_reaction === "like") {
      switch (comment.user_reaction) {
        case "like":
          comment.likes_relation_count -= 1;
          comment.user_reaction = null;
          comment.like = false;
          break;
        case "dislike":
          comment.likes_relation_count += 1;
          comment.dislikes_relation_count -= 1;
          comment.user_reaction = "like";
          comment.like = true;

          break;
        default:
          comment.likes_relation_count += 1;
          comment.user_reaction = "like";
          comment.like = true;

      }
    }
    // Handling "dislike" action
    else if (user_reaction === "dislike") {
      switch (comment.user_reaction) {
        case "dislike":
          comment.dislikes_relation_count -= 1;
          comment.user_reaction = null;
          comment.like = false;

          break;
        case "like":
          comment.likes_relation_count -= 1;
          comment.dislikes_relation_count += 1;
          comment.user_reaction = "dislike";
          comment.like = true;

          break;
        default:
          comment.dislikes_relation_count += 1;
          comment.user_reaction = "dislike";
          comment.like = true;

      }
    }



    fetch(`${app.forum.attribute('apiUrl')}/post/like/${id}?type=${user_reaction}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((response) => { });
  };

  onCommentReply(commentId, index) {
    const updateCommentReply = (newReply) => {

      this.commentList[index].replies = [...this.commentList[index].replies, newReply];
    };
    app.modal.show(CommentReplyModal, {
      postId: this.postData.id,
      commentFor: false,
      commentId: commentId,
      updateCommentReply: updateCommentReply,
      commentIndex: index,
    });
  }
  //  <----------- post view title functions --------------->


  // <--------- Post Comment and reply edit  and delete functions ---------------->
  handleCommentEdit(data, index) {
    const updatePostComment = (newComment) => {
      console.log(newComment)
      let copyCommentArray = this.commentList
      copyCommentArray.splice(index, 1, ...newComment)
      this.commentList = copyCommentArray;


      // this.commentList = [...this.commentList, newComment];
    };

    app.modal.show(CommentReplyEditModal, { postId: data, commentFor: true, updatePostComment: updatePostComment });
  }
  handleCommentDelete = (id, index) => {

    // console.log(this.commentList.splice(index,1))
    swal({
      title: 'Are you sure, you want to delete?',
      icon: 'warning',
      dangerMode: true,
      buttons: ['Cancel', 'OK'],
    }).then(async (willDelete) => {
      if (willDelete) {
        let copyarr = this.commentList
        copyarr.splice(index, 1)
        this.categoryList = copyarr
        m.redraw()
        const csrfToken = await fetchCsrfToken();
        fetch(`${app.forum.attribute('apiUrl')}/post/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': csrfToken,
          },
        })
          .then((response) => response.json())
          .then((response) => {

            swal('deleted successfully');
            // window.location.reload()
          });
      }
    });
  }
  handleReplyEdit(data, index, repIndex) {
    const updateCommentReply = (newComment) => {
      this.commentList[index].replies.splice(repIndex, 1, ...newComment)

    };

    app.modal.show(CommentReplyEditModal, { postId: data, commentFor: false, updateCommentReply: updateCommentReply });
  }
  handleReplyDelete(id, index, repIndex) {
    swal({
      title: 'Are you sure, you want to delete?',
      icon: 'warning',
      dangerMode: true,
      buttons: ['Cancel', 'OK'],
    }).then(async (willDelete) => {

      if (willDelete) {
        console.log(this.commentList[index].replies)
        this.commentList[index].replies.splice(repIndex, 1)
        m.redraw()

        const csrfToken = await fetchCsrfToken();


        fetch(`${app.forum.attribute('apiUrl')}/post/reply/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': csrfToken,
          },
        })
          .then((response) => response.json())
          .then((response) => {

            swal('deleted successfully');
          });
      }
    });
  }
  handleReplyLike(id, index, repIndex, user_reaction) {
    const comment = this.commentList[index].replies[repIndex];

    if (!comment) return; // Exit if comment doesn't exist

    // Handling "like" action
    if (user_reaction === "like") {
      switch (comment.user_reaction) {
        case "like":
          comment.likes_relation_count -= 1;
          comment.user_reaction = null;
          comment.like = false;

          break;
        case "dislike":
          comment.likes_relation_count += 1;
          comment.dislikes_relation_count -= 1;
          comment.user_reaction = "like";
          comment.like = true;

          break;
        default:
          comment.likes_relation_count += 1;
          comment.user_reaction = "like";
          comment.like = true;

      }
    }
    // Handling "dislike" action
    else if (user_reaction === "dislike") {
      switch (comment.user_reaction) {
        case "dislike":
          comment.dislikes_relation_count -= 1;
          comment.user_reaction = null;
          comment.like = false;

          break;
        case "like":
          comment.likes_relation_count -= 1;
          comment.dislikes_relation_count += 1;
          comment.user_reaction = "dislike";
          comment.like = true;

          break;
        default:
          comment.dislikes_relation_count += 1;
          comment.user_reaction = "dislike";
          comment.like = true;

      }
    }
    fetch(`${app.forum.attribute('apiUrl')}/post/reply/like/${id}?type=${user_reaction}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((response) => { });
  }
  // <--------- Post Comment and reply edit  and delete functions ---------------->
// <----------------------- handle sort -------------------->
handleSortComment=(type)=>{
  fetch(`${app.forum.attribute('apiUrl')}/post/${this.slug}?sort=${type}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(response => response.json())
    .then(response => {
        console.log(response)

        console.log("firssssst",data)
        this.postData = response?.data?.post;
        this.commentList = response?.data?.comment;
        m.redraw()
    })
}
// <----------------------- handle sort -------------------->
  view() {
    return (
      <div class="container wiki">
        <div class="wiki-container ">
          <div class="wiki-right">
            <div class='wiki-post-container'>
              {/* <div class='wiki-postList-header'>
                <span class='wiki-postList-header--text'><h1 >WIKI POSTS</h1></span>
              </div> */}
              <div class='wiki-postList-body'>
                {this.postData ?
                  m('.WikiPostPage', [
                    m('div.user-wiki-post', [
                      m('.user_name_main', [
                        this.postData?.user?.avatar_url ? m('img.Avatar', {
                          loading: "lazy",
                          src: `${this.postData?.user?.avatar_url}`,
                          alt: ""
                        }) : m(
                          'span.Avatar.wiki-avatar',
                          {
                            loading: 'lazy',
                            style: '--avatar-bg: #e5cca0;',
                          },
                          `${this.postData.user.username.slice(0, 1)}`
                        ),
                        m('span.username', `${this.postData.user.username}`),
                        app.session.user &&
                        m('span.actions', [
                          this.postData.canEdit &&
                            m('i.icon.fas.fa-pencil-alt.Button-icon', { 'aria-hidden': 'true', title: 'Edit', onclick: () => this.onPostEdit(this.postData) }),
                          this.postData.canDelete &&
                            m('i.icon.fas.fa-trash-alt.Button-icon', { 'aria-hidden': 'true', title: 'Delete', onclick: () => this.onPostDelete(this.postData) })
                        ]),
                      ]),
                    ]),
                    m('.wiki-post-body', [
                      m('.wiki-mainPost-container', [
                        m('div.wiki-specific-postList-header--text', m('h3', this.postData.title)),
                        m('.wiki-mainPost--text', m.trust(this.postData.content)),
                        app.session.user &&
                        m('.wiki-mainPost--tools', [
                          this.postData.canLike &&
                          m('.wiki-mainPost--tools---like', { title: 'Like', onclick: () => this.onPostLike() }, [
                            m('i.icon.far.fa-thumbs-up.Button-icon', { 'aria-hidden': 'true', class: this.postData.like ? 'like-true' : 'like-false' }),
                            m('span', this.postData?.likes_count ?? ''),
                          ]),
                          this.postData.canReply &&
                          m('.wiki-mainPost--tools---comment', { title: 'Comment', onclick: () => this.onPostComment() }, [
                            m('i.icon.far.fa-comment.Button-icon', { 'aria-hidden': 'true' }),
                            m('span', `${this.commentList.length}`),
                          ]),
                        ]),
                      ]),
                      m('.comment-text-box', [m('p.grey-text', 'Comments'),this.commentList.length>1&& m(SomeOtherComponent,{slug:this.postData.slug,handleSortComment:this.handleSortComment})]),
                      m(
                        '.wiki-post-commentList',
                        this.commentList && this.commentList.length
                          ? this.commentList.map((v, index) =>
                            m('.wiki-post-comment-box', [
                              m('.user_name_wiki_comment', [
                                v?.user?.avatar_url ? m('img.Avatar', {
                                  loading: "lazy",
                                  src: `${v?.user?.avatar_url}`,
                                  alt: ""
                                }) : m('span.Avatar.wiki-avatar', {
                                  loading: "lazy",
                                  style: "--avatar-bg: #e5cca0;"
                                }, `${v?.user.username?.slice(0, 1)}`),
                                m('span.username', `${v?.user?.username}`),
                                (app.session.user && (v.delete || v.edit)) ? m(".wiki-comment-dropdown", [
                                  m(".wiki-comment-dropdown-toggle[data-toggle='dropdown']",
                                    m("i.fas.fa-ellipsis-v[aria-hidden='true']")),
                                  m(".wiki-comment-dropdown-menu", [
                                    v.edit && m(".wiki-comment-dropdown-item", {
                                      onclick: () => this.handleCommentEdit(v, index)
                                    }, "Edit"),
                                    v.delete && m(".wiki-comment-dropdown-item", {
                                      onclick: () => this.handleCommentDelete(v.id, index)
                                    }, "Delete")
                                  ])
                                ]) : ""


                              ])
                              ,
                              m('.wiki-mainPost--text', m.trust(v.content)),
                              app.session.user &&
                              m('.wiki-mainPost--tools', [
                                this.postData.canLike &&
                                m('.wiki-mainPost--tools---like', { title: 'Like', onclick: () => this.onCommentLike(v.id, index, "like") }, [
                                  m('i.icon.far.fa-thumbs-up.Button-icon', { 'aria-hidden': 'true', class: (v.like && v?.user_reaction === "like") ? 'like-true' : 'like-false' }),
                                  m('span', `${v.likes_relation_count ?? '0'}`),
                                ]),
                                this.postData.canLike &&
                                m('.wiki-mainPost--tools---like', { title: 'Dislike', onclick: () => this.onCommentLike(v.id, index, "dislike") }, [
                                  m('i.icon.far.fa-thumbs-down.Button-icon', { 'aria-hidden': 'true', class: (v.like && v?.user_reaction === "dislike") ? 'like-true' : 'like-false' }),
                                  m('span', `${v.dislikes_relation_count ?? '0'}`),
                                ]),
                                this.postData.canReply &&
                                m('.wiki-mainPost--tools---comment', { title: 'Reply', onclick: () => this.onCommentReply(v.id, index) }, [
                                  m('i.icon.far.fa-comment.Button-icon', { 'aria-hidden': 'true' }),
                                  m('span', `${v.replies.length}`),
                                ]),
                              ]),
                              v.replies.length > 0 &&
                              m('.wiki-comment-replyList', [
                                m('p.grey-text', 'Reply'),
                                v.replies.length > 0 &&
                                v.replies.map((repObj, repIndex) => m('.wiki-comment-reply-box', [
                                  m('.user_name_main', [
                                    repObj?.user?.avatar_url ? m('img.Avatar', {
                                      loading: "lazy",
                                      src: `${repObj?.user?.avatar_url}`,
                                      alt: ""
                                    }) : m('span.Avatar', {
                                      loading: "lazy",
                                      style: "--avatar-bg: #e5cca0;"
                                    }, `${repObj?.user.username.slice(0, 1)}`),
                                    m('span.username', repObj?.user?.username),

                                  ])
                                  , m('.wiki-comment-reply-box-text', m.trust(repObj.content)),
                                  app.session.user && m('div.wiki-reply-toolbar', [
                                    this.postData.canLike &&
                                    m('.like-dislike-reply-box', [m('i.icon.far.fa-thumbs-up.Button-icon.like-dislike-reply', {
                                      'aria-hidden': 'true',
                                      class: (repObj.like && repObj?.user_reaction === "like") ? 'like-true' : 'like-false',
                                      onclick: () => this.handleReplyLike(repObj.id, index, repIndex, "like")
                                    }), m("span.like-dislike-reply-count", repObj.likes_relation_count)]),
                                    this.postData.canLike &&
                                    m('.like-dislike-reply-box', [m('i.icon.far.fa-thumbs-down.Button-icon.like-dislike-reply', {
                                      'aria-hidden': 'true',
                                      class: (repObj.like && repObj?.user_reaction === "dislike") ? 'like-true' : 'like-false',
                                      onclick: () => this.handleReplyLike(repObj.id, index, repIndex, "dislike")

                                    }),
                                    m("span.like-dislike-reply-count", repObj.dislikes_relation_count)]),
                                    (repObj.can_delete || repObj.can_edit) ? m('div.wiki-comment-dropdown', [
                                      m('span.wiki-comment-dropdown-toggle', {
                                        'data-toggle': 'dropdown'
                                      }, [
                                        m('i.icon.fas.fa-ellipsis-v.Button-icon', {
                                          'aria-hidden': 'true'
                                        })
                                      ]),
                                      m('div.wiki-comment-dropdown-menu', [
                                        repObj.can_edit && m('span.wiki-comment-dropdown-item', {
                                          onclick: () => this.handleReplyEdit(repObj, index, repIndex)
                                        }, 'Edit'),
                                        repObj.can_delete && m('span.wiki-comment-dropdown-item', {
                                          onclick: () => this.handleReplyDelete(repObj.id, index, repIndex)
                                        }, 'Delete')
                                      ])
                                    ]) : ""
                                  ])


                                ])),

                              ]),
                            ])
                          )
                          : ''
                      ),
                    ]),
                  ]) : <>
                    <div class="parent_loader"><div class="loader">Loading...</div> </div>
                  </>
                }


              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

oninit(vnode) {
  super.oninit(vnode);
  this.slug = m.route.param('slug');
  this.postData = null;
  this.discussion_id = null;
  let urls =app.forum.attribute('apiUrl');
    m.request({
      method: 'GET',
      url: `${urls}/post/${this.slug}`, // adjust this to your actual API endpoint
    }).then((data) => {
      this.postData = data?.data?.post;
      this.commentList = data?.data?.comment;
      this.discussion_id = data?.data?.post?.id;
      m.redraw(); // Ensure Mithril re-renders the view with the fetched data.
    });
  }

  showAddWikiModal() {
    app.modal.show(AddWikiModal, { postId: postId });
  }
}
