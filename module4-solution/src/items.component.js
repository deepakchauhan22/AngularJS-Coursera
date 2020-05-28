(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/temp/items.template.html',
  controller: ItemsComponentController,
  bindings: {
   list: "<"
  }
});
ItemsComponentController.$inject = [];
function ItemsComponentController() {
  // var comp = this;
}
})();
