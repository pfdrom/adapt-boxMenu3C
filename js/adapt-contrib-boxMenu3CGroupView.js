define([
  'core/js/views/menuItemView',
  './adapt-contrib-boxMenu3CItemView'
], function(MenuItemView, BoxMenu3CItemView) {

  var BoxMenu3CGroupView = MenuItemView.extend({

    postRender: function() {
      _.defer(this.addChildren.bind(this));
      this.$el.imageready(this.setReadyStatus.bind(this));
      this.$el.parents('.boxmenu3C__item-container').addClass('has-groups');
    }

  }, {
    childContainer: '.js-group-children',
    childView: BoxMenu3CItemView,
    className: 'boxmenu3C-group',
    template: 'boxMenu3CGroup'
  });

  return BoxMenu3CGroupView;

});
