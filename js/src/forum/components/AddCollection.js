import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import Discussion from 'flarum/common/models/Discussion';
import Badge from 'flarum/common/components/Badge';
import HeaderPrimary from 'flarum/forum/components/HeaderPrimary';
import LinkButton from 'flarum/common/components/LinkButton';

// import isFollowingPage from './utils/isFollowingPage';

export default function addSubscriptionBadge() {

extend(HeaderPrimary.prototype, 'items', function(items) {
  items.add('wiki', <LinkButton href={app.route('wiki')}>Wiki</LinkButton>);
});
 
}
