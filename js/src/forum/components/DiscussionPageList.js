import { extend } from 'flarum/extend';
import DiscussionListItem from 'flarum/components/DiscussionListItem';

export default function DiscussionPageList() {

  extend(DiscussionListItem.prototype, 'oncreate', function(item) {

    this.$('.DiscussionListItem-main').each(function() {
      const $this = $(this);

      // Clone the element to create a new anchor element, preserving class and style
      const newAnchor = $this.clone();

      // Replace the /d/ part of the href attribute with /post/
      const customUrl = newAnchor.attr('href').replace('/d/', '/post/');
      newAnchor.attr('href', customUrl);

      // Replace the old anchor with the new one
      $this.replaceWith(newAnchor);
    });
  });

  extend(DiscussionListItem.prototype, 'onupdate', function() {
    this.$('.DiscussionListItem-main').each(function() {
      // If the anchor tag was replaced on create, we may not need to replace it again.
      // However, if it needs to be done, replicate the code from 'oncreate' here.
    });
  });

}
