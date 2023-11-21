import Notification from 'flarum/components/Notification';
import app from 'flarum/app';
export default class PostLikedNotificationComponent extends Notification {
  oninit(vnode) {
    console.log('sfsfsdf',this.attrs.notification);
  }
    icon() {
        return 'fas fa-thumbs-up';
    }

    href() {
      console.log('sfsfsdf',this.attrs.notification);
      const notification = this.attrs.notification;
      const data = notification.content();

      // Construct the custom URL based on the slug
      return `/wiki/post/${data.slug}`;
  }

    title() {
        return app.translator.trans('sidtechno-customlogin.forum.notifications.post_liked_title');
    }

    content() {
        return app.translator.trans('sidtechno-customlogin.forum.notifications.post_liked_text', {title: this.attrs.notification.content().articleTitle});
    }
}
