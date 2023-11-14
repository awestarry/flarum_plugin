import Modal from 'flarum/common/components/Modal';
import swal from 'sweetalert';
import { fetchCsrfToken } from './CsrfToken';

export default class EditPostModal extends Modal {
  constructor(vnode) {
    super(vnode);
    this.postId = vnode.attrs.postId;
  }

  className() {
    return 'EditWikiModal Modal--small';
  }

  title() {
    return 'Edit Discussion Content';
  }

  url = app.forum.attribute('apiUrl');

  oninit(vnode) {
    super.oninit(vnode);

    // Fetching post edit data
    fetch(`${this.url}/post/edit/${this.postId.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.postEditData = data.data;
        m.redraw();
      });
  }

  async handleSubmit(e) {
    let content = $('.des-create .trix-content')[0].innerHTML;

    const formData = {
      content: content,
    };

    if (content.trim()) {
      const csrfToken = await fetchCsrfToken();
      fetch(`${this.url}/post/update/${this.postId.post_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken,
        },
        body: JSON.stringify(formData),
      })
      .then((response) => response.json())
      .then((response) => {
        if (response?.errors) {
          let err_msg = [];
          for (const key in response?.errors) {
            if (Object.hasOwnProperty.call(response?.errors, key)) {
              const element = response?.errors[key];
              if (Array.isArray(element)) {
                err_msg.push(element.join(','));
              }
            }
          }
          swal(`${err_msg.join('')}`, '', 'warning');
        } else {
          window.location.reload()
        }
      })
      .catch((errors) => {
        // Handling errors
      });
    } else {
      swal('Content is required', '', 'warning');
    }
  }

  hide() {
    super.hide();
    m.redraw();
  }

  content() {
    return (
      <div className="Modal-body">
        <div className="Form">
          {/* Content editing field */}
          <div class="wiki-editor des-create">
            <label><span>Description</span></label>
            <input id="trix-default-value" type="hidden" value={this.postId.content} />
            <trix-editor input="trix-default-value" class="trix-content"></trix-editor>
          </div>
          <div className="Form-group">
            <button type="button" onclick={this.handleSubmit.bind(this)} className="Button Button--primary">
              Update Content
            </button>
          </div>
        </div>
      </div>
    );
  }
}
