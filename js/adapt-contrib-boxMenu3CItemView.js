define([
  'core/js/views/menuItemView'
], function(MenuItemView) {

  var BoxMenu3CItemView = MenuItemView.extend({

    events: {
      'click .js-btn-click' : 'onClickMenuItemButton'
    },

    onClickMenuItemButton: function(event) {
      if (event && event.preventDefault) event.preventDefault();
      if (this.model.get('_isLocked')) return;
      Backbone.history.navigate('#/id/' + this.model.get('_id'), {trigger: true});
    }

  }, {
    className: 'boxmenu3C-item',
    template: 'boxMenu3CItem'
  });

  return BoxMenu3CItemView;

});
