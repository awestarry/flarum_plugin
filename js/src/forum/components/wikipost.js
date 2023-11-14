import Page from 'flarum/components/Page';
import swal from 'sweetalert';
import AddWikiModal from './AddWikiModal';
import CommentReplyModal from './CommentReplyModal';
import { fetchCsrfToken } from './CsrfToken';
import EditWikiModal from './EditWikiModal';

export default class wikipost extends Page {
  oninit(vnode) {
    super.oninit(vnode);
    this.slug = m.route.param('slug');
    this.postData = null;
    this.commentList = [];
    this.isPostLike = false;
    let urls = app.forum.attribute('apiUrl');
    // Fetch the post data using AJAX or another method
    m.request({
      method: 'GET',
      url: `${urls}/wiki/post/${this.slug}`, // adjust this to your actual API endpoint
    }).then((data) => {
      this.postData = data?.data?.post;
      this.commentList = data?.data?.comment;
      m.redraw(); // Ensure Mithril re-renders the view with the fetched data.
    });
  }
  onPostDelete=async()=> {
    swal({
      title: 'Are you sure, you want to delete?',
      icon: 'warning',
      dangerMode: true,
      buttons: ['Cancel', 'OK'],
    }).then(async(willDelete) => {
      if (willDelete) {
        const csrfToken =await fetchCsrfToken();
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
                  window.history.back()  
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
      .then((response) => {});
  }
  onPostComment() {
    const updatePostComment = (newComment) => {
      this.commentList = [...this.commentList, newComment];
    };
 
    app.modal.show(CommentReplyModal, { postId: this.postData.id, commentFor: true, updatePostComment: updatePostComment });
  }
  onCommentLike = (id, index) => {
    this.commentList[index].like = !this.commentList[index].like;
    this.commentList[index].likes_relation_count = this.commentList[index].like
      ? Number(this.commentList[index].likes_relation_count) + 1
      : Number(this.commentList[index].likes_relation_count) - 1;
    fetch(`${app.forum.attribute('apiUrl')}/wiki/comment/like/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((response) => {});
  };
  onCommentReply(commentId, index) {
    const updateCommentReply = (newReply) => {
      // let copyArr=[...this.commentList]

      // copyArr[index].replies=[...copyArr[index].replies,newReply]
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

  view() {

    if (!this.postData) return m('center', 'Loading...');

    return m('.WikiPostPage.container', [
      m('div.user-wiki-post', [
        m('.user_name_main', [
            this.postData?.user?.avatar_url ?  m('img.Avatar', {
                loading: "lazy",
                src: `${this.postData?.user?.avatar_url}`,
                alt: ""
            }):  m(
            'span.Avatar.wiki-avatar',
            {
              loading: 'lazy',
              style: '--avatar-bg: #e5cca0;',
            },
           `${ this.postData.user.username.slice(0,1)}`
          ),
          m('span.username',`${ this.postData.user.username}`),
          app.session.user &&
            m('span.actions', [
              m('div.wiki-postList-header--icon', [
                m('i.icon.fas.fa-pencil-alt.Button-icon', { 'aria-hidden': 'true', title: 'Edit', onclick: () => this.onPostEdit() }),
                m('i.icon.fas.fa-trash-alt.Button-icon', { 'aria-hidden': 'true', title: 'Edit', onclick: () => this.onPostDelete() }),
              ]),
            ]),
        ]),
      ]),
      m('.wiki-post-body', [
        m('.wiki-mainPost-container', [
          m('div.wiki-specific-postList-header--text', m('h3', this.postData.title)),
          m('.wiki-mainPost--text', m.trust(this.postData.content)),
          app.session.user &&
            m('.wiki-mainPost--tools', [
              m('.wiki-mainPost--tools---like', { title: 'Like', onclick: () => this.onPostLike() }, [
                m('i.icon.far.fa-thumbs-up.Button-icon', { 'aria-hidden': 'true', class: this.postData.like ? 'like-true' : 'like-false' }),
                m('span', this.postData?.totalLike ?? ''),
              ]),
              m('.wiki-mainPost--tools---comment', { title: 'Comment', onclick: () => this.onPostComment() }, [
                m('i.icon.far.fa-comment.Button-icon', { 'aria-hidden': 'true' }),
                m('span', `${this.commentList.length}`),
              ]),
            ]),
        ]),
        m('p.grey-text', 'Comments'),
        m(
          '.wiki-post-commentList',
          this.commentList && this.commentList.length
            ? this.commentList.map((v, index) =>
                m('.wiki-post-comment-box', [
                    m('.user_name_wiki_comment', [
                        v?.user?.avatar_url ?  m('img.Avatar', {
                            loading: "lazy",
                            src: `${v?.user?.avatar_url}`,
                            alt: ""
                        }):   m('span.Avatar.wiki-avatar', {
                            loading: "lazy",
                            style: "--avatar-bg: #e5cca0;"
                        }, `${ v?.user.username.slice(0,1)}`),
                        m('span.username',`${ v?.user.username}`),
                       
                    ])
,                    
                  m('.wiki-mainPost--text', m.trust(v.content)),
                  app.session.user &&
                    m('.wiki-mainPost--tools', [
                      m('.wiki-mainPost--tools---like', { title: 'Like', onclick: () => this.onCommentLike(v.id, index) }, [
                        m('i.icon.far.fa-thumbs-up.Button-icon', { 'aria-hidden': 'true', class: v.like ? 'like-true' : 'like-false' }),
                        m('span', `${v.likes_relation_count ?? '0'}`),
                      ]),
                      m('.wiki-mainPost--tools---comment', { title: 'Reply', onclick: () => this.onCommentReply(v.id, index) }, [
                        m('i.icon.far.fa-comment.Button-icon', { 'aria-hidden': 'true' }),
                        m('span', `${v.replies.length}`),
                      ]),
                    ]),
                  v.replies.length > 0 &&
                    m('.wiki-comment-replyList', [
                      m('p.grey-text', 'Reply'),
                      v.replies.length > 0 &&
                        v.replies.map((repObj, reo) => m('.wiki-comment-reply-box', [
                            m('.user_name_main', [
                                repObj?.user?.avatar_url ?  m('img.Avatar', {
                                    loading: "lazy",
                                    src: `${repObj?.user?.avatar_url}`,
                                    alt: ""
                                }): m('span.Avatar', {
                                    loading: "lazy",
                                    style: "--avatar-bg: #e5cca0;"
                                }, `${ repObj?.user.username.slice(0,1)}`),
                                m('span.username', repObj?.user?.username),
                              
                            ])
                            ,m('.wiki-comment-reply-box-text', m.trust(repObj.content))])),
                    ]),
                ])
              )
            : ''
        ),
      ]),
    ]);
  }
}
