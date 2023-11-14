import Modal from 'flarum/common/components/Modal';
import swal from 'sweetalert';
import { fetchCsrfToken } from './CsrfToken';

export default class postreplyedit extends Modal {
  postId = null;
  commentId = null;
  constructor(vnode) {
    super(vnode);
    this.postId = vnode.attrs.postId; // Access the postId parameter here
    this.commentFor = vnode.attrs.commentFor;
    this.commentId = vnode.attrs.commentId;
    this.updatePostComment = vnode.attrs.updatePostComment;
    this.updateCommentReply = vnode.attrs.updateCommentReply;
  }
  className() {
    return 'CommentReplyModal Modal--small';
  }

  title() {
    return `Edit your ${this.commentFor ? 'comment' : 'reply'}`;
  }
  data = [];
  categoryList = [];
  sub_categoryList = [];
  url = app.forum.attribute('apiUrl');

  oninit(vnode) {
    super.oninit(vnode);

    // Step 1: API se data fetch karna
  }

  handleSubmit = async (e) => {

    let post_id = this.postId;

    let content = $(`${this.commentFor ? '.post-comment' : '.comment-reply'} .trix-content`)[0].innerHTML;

    let editorElement = document.querySelector('trix-editor');
    let editor = editorElement.editor;
    let content3 = editor.getDocument().toString();
    let words = content3.split(/\s+/).filter(Boolean).length;
    let flag=true
    if(this.commentFor){
        if(words < 100){
          flag=false
         swal("Minimum 100 words are required", "", "warning");
        }
    } else {
        if(words > 100){
          flag=false
          swal("Maximum 100 words", "", "warning");
        }
    }

    // return false
    //
if(flag){    const formData = this.commentFor
      ? {

          content: content,
        }
      : {

          content: content,
          wiki_comment_id: this.commentId,
        };

    if (content.trim()) {
      const csrfToken = await fetchCsrfToken();

      fetch(`${app.forum.attribute('apiUrl')}/${this.commentFor ? `post/${this.postId.id}` : `/post/reply/${this.postId.id}`}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken,
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response.message) {
            if (this.commentFor) {
              this.updatePostComment(response.data);
            } else {
              this.updateCommentReply(response.data);
            }
            this.hide()

          } else {
            swal(response.error, '', 'warning');
          }


          // this.updatePostComment()
        })
        .catch((errors) => {});
    } else {
      swal('Content is required to fill', '', 'warning');
    }}
  };
  content() {
    return (
      <div className="Modal-body">
        <div className="Form">
          {/* You can add form fields for adding a wiki here */}

          <div class="">
            {' '}
            <label class="">
              <span>Description</span>
            </label>
            <div class={`wiki-editor ${this.commentFor ? 'post-comment' : 'comment-reply'}`}>
            <input id="trix-default-value" type="hidden" value={this.postId.content} />
              <trix-editor input="trix-default-value" class="trix-content"></trix-editor>
            </div>
          </div>

          {/* Add more fields as needed */}
          <div className="Form-group">
            <button type="button" onclick={this.handleSubmit.bind(this)} className="Button Button--primary">
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
}
