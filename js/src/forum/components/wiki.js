import Page from 'flarum/components/Page';
import LinkButton from 'flarum/common/components/LinkButton';
import swal from 'sweetalert';
import CommentReplyModal from './CommentReplyModal';
import { fetchCsrfToken } from './CsrfToken';
import EditWikiModal from './EditWikiModal';
import AddWikiModal from './AddWikiModal';
import Trix from "trix"
import CustomDropdown from './DropdownEdit';
import SomeOtherComponent from './DropdownEdit';
import CommentReplyEditModal from './CommentReplyEditModal';

export default class wiki extends Page {
  data = [];
  categoryList = []
  sub_categoryList = []
  url = app.forum.attribute('apiUrl');
  selectedCategoryIndex = 0
  isLoading = false; // Loading state

  oninit(vnode) {
    super.oninit(vnode);
    this.isLoading = true; // Set loading to true when starting API call

    // <========== post title view ===================>
    this.postData = null;
    this.commentList = [];
    this.isPostLike = false;
    // <========== post title view ===================>



    fetch(`${this.url}/wiki/post`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .then(data => {
        this.data = data.data;
        this.permission = data.permissions;

        let isdata = data.data.filter(val => val.post?.length > 0)
        if (isdata?.length > 0) {
          let first_slug = isdata[0].post[0].slug

          this.selectedCategoryIndex = first_slug
          this.handlePostShow(first_slug)
        }
        this.isLoading = false; // Set loading to false once data is received

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
        fetch(`${app.forum.attribute('apiUrl')}/wiki/post/${this.postData.id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': csrfToken,
          },
        })
          .then((response) => response.json())
          .then((response) => {

            swal('deleted successfully');
            window.location.reload()
          });
      }
    });
  }
  onPostEdit() {
    app.modal.show(EditWikiModal, { postId: this.postData });
  }

  onPostLike() {
    this.postData.like = !this.postData.like;
    this.postData.totalLike = this.postData.like ? Number(this.postData.totalLike) + 1 : Number(this.postData.totalLike) - 1;
    fetch(`${app.forum.attribute('apiUrl')}/wiki/post/like/${this.postData.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((response) => { });
  }
  onPostComment() {
    const updatePostComment = (newComment) => {
      if(!!newComment.length){
         this.commentList = [...this.commentList, newComment[0]];
      }

    };
    app.modal.show(CommentReplyModal, { postId:this.postData.id, commentFor: true, updatePostComment: updatePostComment })


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



    fetch(`${app.forum.attribute('apiUrl')}/wiki/comment/like/${id}?type=${user_reaction}`, {
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
        fetch(`${app.forum.attribute('apiUrl')}/wikicomment/${id}`, {
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


        fetch(`${app.forum.attribute('apiUrl')}/wikireplycomment/${id}`, {
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
    fetch(`${app.forum.attribute('apiUrl')}/wiki/replycomment/like/${id}?type=${user_reaction}`, {
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
  fetch(`${app.forum.attribute('apiUrl')}/wiki/post/${this.postData.slug}?sort=${type}`, {
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
// sorry but i can not my changs
// i am cheked ctrl f5

// <----------------------- handle sort -------------------->
  view() {
    return (
      <div class="container wiki">
        {this.isLoading && <div class="parent_loader"> <div class="loader"></div></div>}
        <div class="wiki-container ">
          <div class="wiki-left">
            <div class="wiki-toolbar">
              <div class="wiki-add-btn">


                {' '}
                {app.session.user && this.permission?.canCreate ? (<button class="Button Button--primary" onclick={this.showAddWikiModal.bind(this)}>Add Wiki</button>) : (
    <button class="Button Button--disabled" disabled>
        You Can't Add Wiki
    </button>
)}
              </div>

              <div class="wiki-sideBar">
                {this.data.map((val, index) => <div class={`wiki-sideBar-listItem  ${this.selectedCategoryIndex === index ? "active" : ""}`} >
                  <div class="category-list"><span class="category-list-text">{val?.name}</span></div>
                  <div class="cat-post-title ">
                    {val.post.map((cat_title) => <div class={`${this.selectedCategoryIndex === cat_title.slug ? "active_post_title" : ""}`} onclick={() => this.handlePostShow(cat_title.slug)}>{cat_title.title}</div>)}
                  </div>
                </div>)}

              </div>
            </div>
          </div>
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

                          `${this.postData.user?.username.slice(0, 1)}`
                        ),
                        m('span.username', `${this.postData.user?.username}`),
                        app.session.user &&
                        m('span.actions', [
                          // Edit icon
                          this.permission?.canEdit && this.postData?.edit ?
                            m('div.wiki-postList-header--icon', [
                              m('i.icon.fas.fa-pencil-alt.Button-icon', {
                                'aria-hidden': 'true',
                                title: 'Edit',
                                onclick: () => this.onPostEdit(),
                                class: app.session.user ? '' : 'disabled-cursor'
                              }),
                            ]) : null,

                          // Delete icon
                          this.permission?.canDelete && this.postData?.delete ?
                            m('div.wiki-postList-header--icon', [
                              m('i.icon.fas.fa-trash-alt.Button-icon', {
                                'aria-hidden': 'true',
                                title: 'Delete',
                                onclick: () => this.onPostDelete(),
                                class: app.session.user ? '' : 'disabled-cursor'
                              }),
                            ]) : null,
                        ]),

                      ]),
                    ]),
                    m('.wiki-post-body', [
                      m('.wiki-mainPost-container', [
                        m('div.wiki-specific-postList-header--text', m('h3', this.postData.title)),
                        m('.wiki-mainPost--text', m.trust(this.postData.content)),
                        m('.wiki-mainPost--tools', [
                          // Like button
                          m('.wiki-mainPost--tools---like', {
                            title: 'Like',
                            onclick: app.session.user && this.permission?.canLike ?
                                    () => this.onPostLike() :
                                    () => {}, // Do nothing if user is not logged in or doesn't have permission
                            class: app.session.user && this.permission?.canLike ? '' : 'disabled-cursor'
                          }, [
                            m('i.icon.far.fa-thumbs-up.Button-icon', {
                              'aria-hidden': 'true',
                              class: this.postData.like ? 'like-true' : 'like-false'
                            }),
                            m('span', this.postData?.totalLike ?? ''),
                          ]),

                          // Comment button
                          m('.wiki-mainPost--tools---comment', {
                            title: 'Comment',
                            onclick: app.session.user && this.permission?.canReply ?
                                    () => this.onPostComment() :
                                    () => {}, // Do nothing if user is not logged in or doesn't have permission
                            class: app.session.user && this.permission?.canReply ? '' : 'disabled-cursor'
                          }, [
                            m('i.icon.far.fa-comment.Button-icon', { 'aria-hidden': 'true' }),
                            m('span', `${this.commentList?.length}`),
                          ]),
                        ]),
                      ]),

                      m('.comment-text-box', [m('p.grey-text', 'Comments'),this.commentList?.length>1&& m(SomeOtherComponent,{slug:this.postData.slug,handleSortComment:this.handleSortComment})]),
                      m(
                        '.wiki-post-commentList',
                        this.commentList && this.commentList?.length
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
                                }, `${v?.user?.username.slice(0, 1)}`),
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
                              m('.wiki-mainPost--tools', [
                                // Like button
                                m('.wiki-mainPost--tools---like', {
                                  title: 'Like',
                                  onclick: app.session.user && this.permission?.canLike ?
                                          () => this.onCommentLike(v.id, index, "like") :
                                          () => {}, // Disabled action
                                  class: app.session.user && this.permission?.canLike ? '' : 'disabled-cursor'
                                }, [
                                  m('i.icon.far.fa-thumbs-up.Button-icon', {
                                    'aria-hidden': 'true',
                                    class: (v.like && v?.user_reaction === "like") ? 'like-true' : 'like-false'
                                  }),
                                  m('span', `${v.likes_relation_count ?? '0'}`),
                                ]),

                                // Dislike button
                                m('.wiki-mainPost--tools---like', {
                                  title: 'Dislike',
                                  onclick: app.session.user && this.permission?.canLike ?
                                          () => this.onCommentLike(v.id, index, "dislike") :
                                          () => {}, // Disabled action
                                  class: app.session.user && this.permission?.canLike ? '' : 'disabled-cursor'
                                }, [
                                  m('i.icon.far.fa-thumbs-down.Button-icon', {
                                    'aria-hidden': 'true',
                                    class: (v.like && v?.user_reaction === "dislike") ? 'like-true' : 'like-false'
                                  }),
                                  m('span', `${v.dislikes_relation_count ?? '0'}`),
                                ]),

                                // Comment button
                                m('.wiki-mainPost--tools---comment', {
                                  title: 'Reply',
                                  onclick: app.session.user && this.permission?.canReply ?
                                          () => this.onCommentReply(v.id, index) :
                                          () => {}, // Disabled action
                                  class: app.session.user && this.permission?.canReply ? '' : 'disabled-cursor'
                                }, [
                                  m('i.icon.far.fa-comment.Button-icon', { 'aria-hidden': 'true' }),
                                  m('span', `${v.replies?.length}`),
                                ]),
                              ]),


                              v.replies?.length > 0 &&
                              m('.wiki-comment-replyList', [
                                m('p.grey-text', 'Reply'),
                                v.replies?.length > 0 &&
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
                                 m('div.wiki-reply-toolbar', [
                        // Like button
                        m('.like-dislike-reply-box', [
                          m('i.icon.far.fa-thumbs-up.Button-icon.like-dislike-reply', {
                            'aria-hidden': 'true',
                            class: `${(repObj.like && repObj?.user_reaction === "like") ? 'like-true' : 'like-false'} ${app.session.user && this.permission?.canLike ? '' : 'disabled-cursor'}`,
                            onclick: app.session.user && this.permission?.canLike ?
                                    () => this.handleReplyLike(repObj.id, index, repIndex, "like") :
                                    () => {} // Do nothing if user is not logged in or doesn't have permission
                          }),
                          m("span.like-dislike-reply-count", repObj.likes_relation_count)
                        ]),

                        // Dislike button
                        m('.like-dislike-reply-box', [
                          m('i.icon.far.fa-thumbs-down.Button-icon.like-dislike-reply', {
                            'aria-hidden': 'true',
                           class: `${(repObj.like && repObj?.user_reaction === "like") ? 'like-true' : 'like-false'} ${app.session.user && this.permission?.canLike ? '' : 'disabled-cursor'}`,
                            onclick: app.session.user && this.permission?.canLike ?
                                    () => this.handleReplyLike(repObj.id, index, repIndex, "dislike") :
                                    () => {} // Do nothing if user is not logged in or doesn't have permission
                          }),
                          m("span.like-dislike-reply-count", repObj.dislikes_relation_count)
                        ]),

                        m('div.wiki-comment-dropdown', [
                          m('span.wiki-comment-dropdown-toggle', { 'data-toggle': 'dropdown' }, [
                            m('i.icon.fas.fa-ellipsis-v.Button-icon', { 'aria-hidden': 'true' })
                          ]),
                          m('div.wiki-comment-dropdown-menu', [
                            // Edit option
                            repObj.can_edit ?
                              m('span.wiki-comment-dropdown-item', {
                                onclick: app.session.user ?
                                        () => this.handleReplyEdit(repObj, index, repIndex) :
                                        () => {}, // Do nothing if user is not logged in
                                class: app.session.user ? '' : 'disabled-cursor'
                              }, 'Edit') : null,

                            // Delete option
                            repObj.can_delete ?
                              m('span.wiki-comment-dropdown-item', {
                                onclick: app.session.user ||  repObj.can_delete  ?
                                        () => this.handleReplyDelete(repObj.id, index, repIndex) :
                                        () => {}, // Do nothing if user is not logged in
                                class: app.session.user ||  repObj.can_delete ? '' : 'disabled-cursor'
                              }, 'Delete') : null
                          ])
                        ])

                      ])



                                ])),

                              ]),
                            ])
                          )
                          : ''
                      ),
                    ]),
                  ]) : <>
                    <center>Click on the title in left sidebar to preview</center>
                  </>
                }
                {/* {this.data.map((val, index) =>
  m(LinkButton, {
    key: index,
    class: 'wiki-postList-link',
    href: `wiki/post/${val?.slug}`
  }, [
    m('.wiki-postList--box', [
      m('.wiki_post_title', [
        val?.user?.avatar_url ?  m('img.Avatar', {
            loading: "lazy",
            src: `${val?.user?.avatar_url}`,
            alt: ""
        }):  m(
        'span.Avatar.wiki-avatar',
        {
          loading: 'lazy',
          style: '--avatar-bg: #e5cca0;',
        },
       `${ val.user.username.slice(0,1)}`
      ),
      m('span.username',`${ val.user.username}`),

    ])
    ,
      m('.wiki-postList--box---header', [
        m('span', m('h3', val?.title || "no title")),
        m('span', m('p', `${val?.category} (${val?.subcategory})`))
      ]),
      m('.wiki-postList--box---body', [
        m('p', {
          oncreate: vnode => {
            vnode.dom.innerHTML = val.content || "no description";
          }
        })
      ])
    ])
  ])
)} */}

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  handlePostShow(slug) {
    this.selectedCategoryIndex = slug
    m.request({
      method: 'GET',
      url: `${app.forum.attribute('apiUrl')}/wiki/post/${slug}`, // adjust this to your actual API endpoint
    }).then((data) => {
      this.postData = data?.data?.post;
      this.commentList = data?.data?.comment;
      this.permission = data?.data?.permissions;
      m.redraw(); // Ensure Mithril re-renders the view with the fetched data.
    });
  }

  showAddWikiModal() {
    app.modal.show(AddWikiModal)

  }
}
