var app = angular.module("pageModule", ['ngMaterial']);

app.controller("pageController", function($scope){

  $scope.init = function(){
    $scope.catchPhrase = "E";

    VanillaTilt.init(document.querySelector(".mainCard"), {
  		max: 20,
  		speed: 400,
      scale: 1.1,
      glare : true,
      "max-glare": 0.8
  	});
  };

});
