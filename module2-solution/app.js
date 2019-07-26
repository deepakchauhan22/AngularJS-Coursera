(function () {
'use strict';


angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  
     var ToBuy = this;
     ToBuy.shoppingList = ShoppingListCheckOffService.getItems();
      ToBuy.removeItem = function (index) {
       ShoppingListCheckOffService.removeItem(index);
       };

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var Bought = this;
  Bought.boughtList = ShoppingListCheckOffService.boughtItems();
  
}

function ShoppingListCheckOffService() {

var shoppingList = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  },
  {
    name: "wine",
    quantity: "5"
  }
];

  var service = this;
  var boughtList = [];
  service.getItems = function () {
    return shoppingList;
  };
  service.removeItem = function (index) {
    
    boughtList.push(shoppingList[index]);
    shoppingList.splice(index,1);
   
  };
   service.boughtItems = function () {
    return boughtList;
  };
  
}
})();
