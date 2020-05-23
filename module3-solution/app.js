(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive("foundItems", FoundItemsDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;
  menu.searchFor = "";
  menu.searchResult="";
  menu.found=[];
  menu.search = function(){
    if(menu.searchFor && menu.searchFor.length > 0)
    {
    menu.searchResult = "";
    var promise = MenuSearchService.getMatchedMenu(menu.searchFor);
    promise.then(function (result) {
      menu.found = result;
      if(menu.found.length ===0)
      {
        menu.searchResult = "Nothing Found (Matching \""+menu.searchFor +"\")";
      }
    });

    }

  else {
    menu.searchResult = "Nothing found";
  }
};

menu.dontWant = function (index) {
  console.log("Index",index);
  menu.found.splice(index,1);
};
}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenu = function (searchTerm) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    })

    .then(function (response) {
      var menuItems = response.data;
      var foundItems = filterforDesc(menuItems.menu_items,searchTerm);
      return foundItems;
    });

  };

  function filterforDesc(list,searchTerm) {
    var newList = [];
    for( var i =0; i< list.length;i++)
    {
      if(list[i].description.indexOf(searchTerm)>0)
      {
        newList.push(list[i]);
      }
    }
    return newList;

  }
}

function FoundItemsDirective() {
     var ddo ={
       templateUrl:"itemList.html",
       scope:{
            list: "<",
            title: "@title",
            result: "@result",
            dontWant: "&"
       },
     };
     return ddo;

}

})();
