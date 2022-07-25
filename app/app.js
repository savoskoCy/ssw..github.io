'use strict';

const app = angular.module("testTask", []);

app.controller('productsCtrl', ['$scope', function ($scope) {

  $scope.data = {
    "items": [
      {
        "type" : "Child",
        "img" : "https://image.shutterstock.com/image-photo/composition-fashionable-children-clothes-on-600w-793089319.jpg",
        "price" : "3.20",
        "name" : "T-SHIRT",
        "options": ["Size", "S", "M", "L", "XL"]
      }
      ,{
        "type" : "Child",
        "img" : "https://image.shutterstock.com/image-photo/composition-fashionable-children-clothes-on-600w-793089319.jpg",
        "price" : "13.30",
        "name" : "Pants FORCLAZ",
        "options": ["Size", "M", "XL"]
      }
      ,{
        "type" : "Men",
        "img" : "https://image.shutterstock.com/image-photo/flat-lay-mens-fashion-casual-600w-687937360.jpg",
        "price" : "5.00",
        "name" : "T-SHIRT",
        "options": ["Size", "XL"]
      }
      ,{
        "type" : "Women",
        "img" : "https://image.shutterstock.com/image-photo/woman-clothes-accessories-set-on-600w-722710441.jpg",
        "price" : "3.21",
        "name" : "T-SHIRT",
        "options":  ["Size", "S", "M", "L", "XL"]
      }
      ,{
        "type" : "Women",
        "img" : "https://image.shutterstock.com/image-photo/woman-clothes-accessories-set-on-600w-722710441.jpg",
        "price" : "31",
        "name" : "backpack",
        "options": ["color", "red", "blue", "black"]
      }
      , {
        "type" : "Other",
        "img" : "https://image.shutterstock.com/image-vector/cotton-shirt-clothes-black-blue-600w-1911016360.jpg",
        "price" : "0",
        "name" : "car",
        "options": ["color", "red", "blue", "black"]
      }
    ]
  };

  // $scope.showCategory = {}
  $scope.showCategory = {
    "men": true,
    "women": true,
    "child": false
  };

  $scope.changeFilter = function (obj) {
    return $scope.showCategory[obj.type.toLowerCase()] || noFilter($scope.showCategory)
  }

  $scope.getTypes = function () {
    return ($scope.data.items || []).
    map(item => item.type.toLowerCase()).
    filter((type, idx, arr) => {
      return type.toString() !== 'other' && arr.indexOf(type) === idx
    })
  }

  function noFilter(filterObj) {
    return Object.
    keys(filterObj).
    every(function (key) { return !filterObj[key]; });
  }

  $scope.clearFilters = function () {
    Object.keys($scope.showCategory).forEach(key => $scope.showCategory[key] = false)
  }

  $scope.scrollToProducts = function () {
    document.getElementById('productsSectionId').scrollIntoView();
  }

  $scope.chosenItem = function (item, target) {
    target.path[2].querySelector('.optionList__selected').innerText = item
  }

}]);

app.controller('menuCtrl', ['$scope', function ($scope) {

  $scope.data = {
    "footerMenu" : [
      {
        "name": "Credits",
        "link": "https://softswiss.com/",
        "title": "credits"
      },
      {
        "name": "Privacy",
        "link": "https://softswiss.com/",
        "title": "privacy"
      },
      {
        "name": "About",
        "link": "https://www.softswiss.com/about-us/",
        "title": "about us"
      },
      {
        "name": "Contact",
        "link": "https://www.softswiss.com/contact-us/",
        "title": "contact us"
      }
    ]};

}]);
