import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import DiscussionControls from 'flarum/forum/utils/DiscussionControls';
import DiscussionPage from 'flarum/forum/components/DiscussionPage';
import Navigation from 'flarum/forum/components/Navigation';
import Button from 'flarum/common/components/Button';
import { fetchCsrfToken } from './CsrfToken';
import swal from 'sweetalert';
import IndexPage from 'flarum/forum/components/IndexPage';

export default function addLockControl() {
  const slidingDiv = document.createElement('div');
  slidingDiv.style.width = '500px'; // or whatever width you desire
  slidingDiv.style.height = '100vh'; // assuming you want it to take up the full height
  slidingDiv.style.position = 'fixed';
  // slidingDiv.style.paddingTop = '40px';
  slidingDiv.style.top = '52px';
  slidingDiv.style.right = '-500px'; // initially position it off the right side of the viewport
  slidingDiv.style.transition = 'right 0.3s'; // for a smooth slide-in effect
  slidingDiv.className = 'collection_slider';
  // 2. Append the div to the body.
  document.body.appendChild(slidingDiv);

  slidingDiv.innerHTML = `<div class='slider_main'>
<span class='cross_collection_btn'><i class="fas fa-arrow-right"></i></span>
<div class='collection_list_data'> </div>
</div>`;
  $('.cross_collection_btn').click(function () {
    slidingDiv.style.right = '-500px';
    $('.collection_slider_backdrop').remove()
  });

  function handleGetCollectionData() {
    let url = app.forum.attribute('apiUrl');

    fetch(`${url}/all/collection`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
      let url1 = app.forum.attribute('baseUrl');

        const rowsHTML = data.data.map(
            (item) =>
              `
              <li>

              <div class="collection-list-item">
              <a href='${url1}/d/${item.slug}' class='collection_post_link'>
              <div class="collection-container">
                 <span class="collection-title">${item.discussion.title}</span>
                 </div>
          </a>

                 <i id='${item.discussion_id}' title="Remove from collection" class="fas fa-trash collection-delete"></i>

          </div>
          </li>
  `
     ) .join('');
    
          let insert_ul=`<ul>
          ${rowsHTML.length>0?rowsHTML:`<li style='color:#4d698e'><center> <h4>No collection found</h4></center> </li>`}
          </ul>`
        $('.collection_list_data').html(insert_ul)
        $('.collection-delete').click(function (e) {
          let id=e.target.id
          fetch(`${url}/remove/collection/${id}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          })
            .then((response) => response.json())
            .then((res)=>{
              handleGetCollectionData()
             })
          e.preventDefault();

         
         });
      })

      .catch((error) => {});
  }
  extend(IndexPage.prototype, 'navItems', function (items) {
    let isLogin = app.session.user;
    if (isLogin) {
      items.add(
        'collections',
        <a
          class="hasIcon"
          onclick={() => {
            if (slidingDiv.style.right === '-500px') {
              slidingDiv.style.right = '0'; // slide in
              handleGetCollectionData();
              $(document.body).append(`<div class='collection_slider_backdrop'></div>`)
              $('.collection_slider_backdrop').click(function(){
                slidingDiv.style.right = '-500px';
                $(this).remove()
              })
            } else {
              slidingDiv.style.right = '-500px'; // slide out
            }
          }}
        >
          <i aria-hidden="true" class="icon fas fa-heart Button-icon"></i>
          <span>Collections</span>
        </a>
      );
    }
  });

  extend(DiscussionControls, 'moderationControls', function (items, discussion) {
    let isLogin = app.session.user;
    if (isLogin) {
      let url = app.forum.attribute('apiUrl');

      const addCollection = async (e) => {
        let post_id = discussion.data.id;
        // let post_id2=e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute('data-id');;
        //

        const csrfToken = await fetchCsrfToken();
        fetch(`${url}/add/collection/${post_id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              return response.json().then((errorData) => {
                throw new Error(errorData.error);
              });
            }
          })
          .then((res) => {
            if (res.status) {
              swal(`${res.data}`, '', 'success');
            } else {
              if (res.message) {
                swal('Error', res.message, 'error');
              } else {
                swal('Error', res.error, 'error');
              }
            }
          })
          .catch((err) => {
            swal('Error: Something went wrong', err.message, 'error');
          });
      };

      items.add(
        'addToFavorite',
        <Button icon="fas fa-heart" onclick={addCollection}>
          Add to collection
        </Button>
      );
    }
  });
  //   this.lockAction.bind(discussion)
  // DiscussionControls.lockAction = function () {
  //   this.save({ isLocked: !this.isLocked() }).then(() => {
  //     if (app.current.matches(DiscussionPage)) {
  //       app.current.get('stream').update();
  //     }

  //     m.redraw();
  //   });
  // };
}
