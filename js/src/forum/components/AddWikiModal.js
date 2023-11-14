import Modal from 'flarum/common/components/Modal';
import swal from 'sweetalert';
import { fetchCsrfToken } from './CsrfToken';

export default class AddWikiModal extends Modal {
  constructor(vnode) {
    super(vnode);
  }
  className() {
    return 'AddWikiModal Modal--small';
  }

  title() {
    return 'Add Wiki';
  }
  data = [];
  categoryList = [];
  sub_categoryList = [];
  url = app.forum.attribute('apiUrl');

  handleOutsideClick(e) {
    const dropdownDiv = document.querySelector('.dropdown-options');
    const searchInput = document.querySelector('.category-search');

  if(dropdownDiv){  // If the target of the click isn't the dropdownDiv, the searchInput, nor a descendant of the dropdownDiv
    if (!dropdownDiv.contains(e.target) && !searchInput.contains(e.target)) {
      dropdownDiv.style.display = 'none';
    }}
  }

  oninit(vnode) {
    super.oninit(vnode);
    document.addEventListener('click', this.handleOutsideClick.bind(this));

    // Step 1: API se data fetch karna
    fetch(`${this.url}/wiki/category`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.categoryList = data.data;
        m.redraw();
      });
  }
  handleCategoryChange(e) {
    let category_id = e.target.value;
    let url = this.url;
    console.log(e.target.value, url);
    fetch(`${app.forum.attribute('apiUrl')}/wiki/category/sub/${category_id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.sub_categoryList = data.data.subcategory;
        m.redraw();
      });
  }
  async handleSubmit(e) {
    console.log(e, 123456)
    let cat_id = $('.cat-create').val();
    let subcat_id = $('.subcat-create').val();
    let title = $('.title-create').val();
    let content = $('.des-create .trix-content')[0].innerHTML;

    // console.log($('.des-create .trix-content')[0].innerHTML,content.toString())
    const formData = {
      category_id: cat_id,
      title: title,
      content: content,
    };
    if (cat_id && title.trim() && content.trim()) {
      const csrfToken = await fetchCsrfToken();
      // Now you have the CSRF token in the "csrfToken" variable
      // Make an API request to a hypothetical endpoint
      fetch(`${app.forum.attribute('apiUrl')}/wiki/post/create`, {
        method: 'POST',
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
          if(typeof(response.errors==="string")){
            swal(`${response.errors}`, '', 'warning');

          }else{  for (const key in response?.errors) {
              if (Object.hasOwnProperty.call(response?.errors, key)) {
                const element = response?.errors[key];
                if (Array.isArray(element)) {
                  err_msg.push(element.join(','));
                }
              }
            }
            swal(`${err_msg.join('')}`, '', 'warning');}
          } else {
            window.location.reload()
          }
        })
        .catch((errors) => {});
    } else {
      swal('All fields are required to fill', '', 'warning');
    }
  }
  onremove() {
    document.removeEventListener('click', this.handleOutsideClick.bind(this));
  }
  
  
  // hide() {
  //   super.hide(); // This calls the original hide function from the parent class.
  //   this.onremove();
  //   document.removeEventListener('click', this.handleOutsideClick);
  //   m.redraw() // This calls your custom function.
  // }
  handleCategorySearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    this.showDropdownOptions(searchTerm);
  }

  handleCategoryFocus() {
    this.showDropdownOptions();
  }
  showDropdownOptions(filter = '') {
    const dropdownDiv = document.querySelector('.dropdown-options');
    const selectOptions = this.categoryList.map((val) => {
      return { id: val?.name, name: val?.name };
    });

    let filteredOptions = selectOptions;

    if (filter) {
      filteredOptions = selectOptions.filter((option) => option.name.toLowerCase().includes(filter));
    }

    dropdownDiv.innerHTML = '';

    for (let option of filteredOptions) {
      let optionDiv = document.createElement('div');
      optionDiv.innerText = option.name;
      optionDiv.className = 'dropdown-option';
      optionDiv.onclick = () => {
        this.handleCategorySelect(option.name, option.name);
      };
      dropdownDiv.appendChild(optionDiv);
    }

    dropdownDiv.style.display = 'block';
  }
  handleCategorySelect(id, name) {
    // Update the hidden select input with selected value
    // const selectInput = document.querySelector('.cat-create');
    // selectInput.value = name;

    // Hide dropdown and update search input with selected name
    const dropdownDiv = document.querySelector('.dropdown-options');
    dropdownDiv.style.display = 'none';

    const searchInput = document.querySelector('.category-search');
    searchInput.value = name;
  }
 
  content() {
    return (
      <div className="Modal-body">
        <div className="Form">
          {/* You can add form fields for adding a wiki here */}
          <div class="wiki-category-search vertical-spacing">
            <label class="">
              <span> Category </span>
            </label>{' '}
            <input
              type="text"
              class="FormControl category-search cat-create"
              placeholder="Search category..."
              oninput={this.handleCategorySearch.bind(this)}
              onfocus={this.handleCategoryFocus.bind(this)}
            />
            <div class="dropdown-options wiki-category-dropdown" style="display:none;"></div>
          </div>

          {/* <div class="wiki-category-select vertical-spacing">
                <label class="">
                  <span> Category </span></label>{' '}
                  <select class="FormControl cat-create vertical-spacing" onchange={this.handleCategoryChange.bind(this)}>
                  <option value="" hidden >--select--</option>
                    {this.categoryList.map(val=><option value={val?.id}  >{val?.name}</option>)}
                  </select>
                
              </div> */}
          {/* <div class="wiki-subcategory-select vertical-spacing">
                {' '}
                <label class="">
                  <span>Sub Category </span> </label>
                  <select class="FormControl subcat-create vertical-spacing">
                  <option value=""  hidden >--select--</option>
                    {this.sub_categoryList.map(val=><option value={val?.id}  >{val?.name}</option>)}
                  </select>
               
              </div> */}

          <div class="wiki-subcategory-select vertical-spacing">
            {' '}
            <label class="">
              <span>Tiltle</span>
            </label>
            <input className="FormControl title-create vertical-spacing" name="title" placeholder="Title" />
          </div>
          <div class="">
            {' '}
            <label class="">
              <span>Description</span>
            </label>
            <div class="wiki-editor des-create">
              <trix-editor class="trix-content"></trix-editor>
            </div>
          </div>

          {/* Add more fields as needed */}
          <div className="Form-group">
            <button type="button" onclick={this.handleSubmit} className="Button Button--primary">
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
}
