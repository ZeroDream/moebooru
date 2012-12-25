jQuery(document).ready(function($) {
  var hl_menu_class = '.' + $('#main-menu').data('controller');
  $('#main-menu ' + hl_menu_class).addClass('current-menu');

  var forum_menu_items = $.parseJSON($.cookie('current_forum_posts'));
  var create_forum_item = function(forum_json) {
    return $('<li/>', {
      html: $('<a/>', {
        href: Moebooru.path('/forum/show/' + forum_json[1]),
        text: forum_json[0],
        class: forum_json[2] ? 'unread-topic' : ' '
      }),
    });
  };
  var menu_items_num = forum_menu_items.length > 5 ? 5 : forum_menu_items.length;
  for (var i = menu_items_num - 1; i >=0; i--) {
    $('.forum-items-start').after(create_forum_item(forum_menu_items[i]));
  };
  var forum_submenu = $('#main-menu .forum ul');
  if (forum_submenu.width() > 200) {
    forum_submenu.css('width', 200)
    forum_submenu.find('a').css('white-space', 'normal');
  };
});