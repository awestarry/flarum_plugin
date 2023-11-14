import Modal from 'flarum/common/components/Modal';
import Stream from 'flarum/common/utils/Stream';
import Button from 'flarum/common/components/Button';
import app from 'flarum/app';
import { fetchCsrfToken } from './CsrfToken';

export default class MyEditorModal extends Modal {
  oninit(vnode) {
    super.oninit(vnode);
    this.discussion_id = this.attrs.postId || null;
    this.editorContent = Stream('');
    this.discussion_id = this.attrs.postId || null;
    this.editorContent = Stream(this.discussion_id ? this.discussion_id.content : '');
    console.log(this.discussion_id.id)
    console.log(this.discussion_id.post_id)
    console.log(this.discussion_id.content)
  }

  className() {
    return 'MyEditorModal Modal--medium';
  }

  title() {
    return 'Update Post';
  }

  content() {
    return (
      <div className="Modal-body">
        <div class="wiki-editor des-create">
          <input id="trix-default-value" type="hidden" />
          <trix-editor input="trix-default-value" class="trix-content" oninput={event => this.editorContent(event.target.innerHTML)}>{this.editorContent()}</trix-editor>
        </div>
        <div className="Modal-footer">
          {Button.component({
            className: 'Button Button--primary',
            type: 'submit',
            loading: this.loading,
            onclick: this.onSubmit.bind(this),
          }, 'Submit')}
        </div>
      </div>
    );
  }

    // ... other methods ...

    async onSubmit(event) {
      event.preventDefault();

      this.loading = true;

      // Make sure you retrieve the raw HTML content from the editor
      const htmlContent = this.editorContent();

      // Log the HTML content to make sure it's correct
      console.log('Editor content (HTML):', htmlContent);

      // Retrieve the CSRF token
      const csrfToken = await fetchCsrfToken();

      // Construct the payload as JSON
      const payload = {
        content: htmlContent,
        discussion_id: this.discussion_id,
      };

      // Send the request with the JSON payload
      fetch(`${app.forum.attribute('apiUrl')}/post`, {
        method: 'POST',
        headers: {
          'X-CSRF-Token': csrfToken,
          'Content-Type': 'application/json', // Make sure to set content type as JSON
        },
        body: JSON.stringify(payload),
      }).then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      }).then(data => {
        // Handle success
        this.hide();
        this.editorContent('');
        // Here, you might want to update the UI with the new post
      }).catch(error => {
        // Handle errors
        console.error('Error posting the data:', error);
      }).finally(() => {
        this.loading = false;
        m.redraw();
      });
    }


  }
