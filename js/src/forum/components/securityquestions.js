import Component from 'flarum/Component';
import Button from 'flarum/components/Button';

export default class SecurityQuestionsComponent extends Component {
  view() {
    return m('form', {
      onsubmit: this.onSubmit.bind(this),
    }, [
      m('label', 'Question 1: '),
      m('input', {type: 'text', name: 'answer1'}),
      // ... more questions ...
      Button.component({
        type: 'submit',
        className: 'Button',
        loading: this.loading,
      }, 'Submit'),
    ]);
  }

  onSubmit(e) {
    e.preventDefault();
    // Submit answers to your backend endpoint and handle the response
  }
}
