import Modal from 'flarum/components/Modal';
import SignUpModal from 'flarum/components/SignUpModal';
import Component from 'flarum/common/Component';

export default class CustomSignupModal extends SignUpModal {
    init() {
        super.init();
        this.favoriteColor = m.prop('');
    }

    className() {
        return 'Modal--small CustomSignupModal';
    }

    // Overriding the content method to add the new input field.
    content() {
        return (
            <div className="Modal-body">
                <div className="Form">
                    {super.body()} {/* Include the original fields */}
                    <div className="Form-group">
                        <label>Favorite Color</label>
                        <input className="FormControl" bidi={this.favoriteColor}/>
                    </div>
                    {this.submitButton()}
                </div>
            </div>
        );
    }

    // Overriding the onsubmit method to send the new field data.
    onsubmit(e) {
        e.preventDefault();

        // Send custom field along with the original signup data.
        const data = this.submitData();
        data.favoriteColor = this.favoriteColor();

        app.request({
            url: app.forum.attribute('apiUrl') + '/users',
            method: 'POST',
            data,
        }).then(
            // Successful signup
            () => m.redraw(),
            // Handle signup errors
            this.loaded.bind(this)
        );
    }
}
