(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/temp/categories.template.html',
  controller: CategoriesComponentController,
  bindings: {
    items: '<'
  }
});

CategoriesComponentController.$inject = [];
function CategoriesComponentController() {
  // var comp = this;
}
})();
