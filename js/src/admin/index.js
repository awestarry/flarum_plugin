import app from 'flarum/admin/app';


app.initializers.add('sidtechno-customlogin', () => {
  app.extensionData
  .for('sidtechno-customlogin')
  .registerPermission({
    icon: 'fas fas fa-edit', // You can change the icon if needed
    label: app.translator.trans('sidtechno-customlogin.admin.permissions.category_create'),
    permission: 'discussion.category.create', // Make sure this matches the permission string used in your PHP backend
  }, 'start')
  .registerPermission(
    {
      icon: 'fas fa-pencil-alt',
      label: app.translator.trans('sidtechno-customlogin.admin.permissions.wiki_create'),
      permission: 'discussion.wiki.create',
    }, 'start')
    .registerPermission(
      {
        icon: 'fa fa-solid fa-file',
        label: app.translator.trans('sidtechno-customlogin.admin.permissions.wiki_edit'),
        permission: 'discussion.wiki.edit',
      }, 'start')
      .registerPermission(
        {
          icon: 'fa fa-solid fa-trash',
          label: app.translator.trans('sidtechno-customlogin.admin.permissions.wiki_delete'),
          permission: 'discussion.wiki.delete',
        }, 'start')
    .registerPermission(
      {
        icon: 'fa fa-comment-dots',
        label: app.translator.trans('sidtechno-customlogin.admin.permissions.wiki_reply'),
        permission: 'discussion.wiki.reply',
      }, 'start')
      .registerPermission(
        {
          icon: 'fa fa-thumbs-up',
          label: app.translator.trans('sidtechno-customlogin.admin.permissions.wiki_like'),
          permission: 'discussion.wiki.like',
        }, 'start')


  console.log('[sidtechno-customlogin] Hello, admin!');
});
