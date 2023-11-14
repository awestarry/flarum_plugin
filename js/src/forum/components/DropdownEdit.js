import Component from 'flarum/Component';
import Button from 'flarum/components/Button';
import Dropdown from 'flarum/components/Dropdown';
import ItemList from 'flarum/utils/ItemList';

class CustomDropdown extends Component {
    constructor(vnode) {
        super(vnode);
        this.slug = vnode.attrs.slug; // Access the postId parameter here
        this.handleSortComment = vnode.attrs.handleSortComment; // Access the postId parameter here
      }
    init() {
        this.selected = 'Sort'; // Change here
    }

    view() {
        return m(Dropdown, {
            buttonClassName: 'Button',
            label: this.selected||"Sort", 
        }, this.getDropdownItems().toArray());
    }
    handleSortData(type){
        
    }
    getDropdownItems() {
        const items = new ItemList();

        items.add('like', Button.component({
            className: 'Dropdown-item',
            active: this.selected === 'Like',  
            onclick: () => {
                this.selected = 'Like'; 
                this.handleSortComment("like");
            }
        }, 'Like'));

        items.add('latest', Button.component({
            className: 'Dropdown-item',
            active: this.selected === 'Latest',  
            onclick: () => {
                this.selected = 'Latest'; 
                this.handleSortComment("latest");
            }
        }, 'Latest'));

        items.add('oldest', Button.component({
            className: 'Dropdown-item',
            active: this.selected === 'Oldest', 
            onclick: () => {
                this.selected = 'Oldest'; 
                this.handleSortComment("oldest");

            }
        }, 'Oldest'));

        return items;
    }
}

export default class SomeOtherComponent extends Component {
    view(vnode) {
        return m('div', [
            m(CustomDropdown,{slug:vnode.attrs.slug,handleSortComment:vnode.attrs.handleSortComment})
        ]);
    }
}
