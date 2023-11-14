import Component from 'flarum/Component';
import Button from 'flarum/components/Button';
import Dropdown from 'flarum/components/Dropdown';
import ItemList from 'flarum/utils/ItemList';

class CustomDropdown extends Component {
    init() {
        this.selected = 'Latest'; // Change here
    }

    view() {
        return m(Dropdown, {
            buttonClassName: 'Button',
            label: "", 
        }, this.getDropdownItems().toArray());
    }

    getDropdownItems() {
        const items = new ItemList();

        items.add('latest', Button.component({
            className: 'Dropdown-item',
            active: this.selected === 'Latest',  
            onclick: () => {
                this.selected = 'Latest'; 
            }
        }, 'Latest'));

        items.add('oldest', Button.component({
            className: 'Dropdown-item',
            active: this.selected === 'Oldest', 
            onclick: () => {
                this.selected = 'Oldest'; 
            }
        }, 'Oldest'));

        return items;
    }
}

export default class SomeOtherComponent extends Component {
    view() {
        return m('div', [
            m(CustomDropdown)
        ]);
    }
}
