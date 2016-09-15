"use strict";

(function(){
  angular
  .module("users")
  .controller("UserShowController", [
    "UserFactory",
    "BattleFactory",
    "$stateParams",
    "$http",
    "$scope",
    UserShowControllerFunction
  ]);

  function UserShowControllerFunction(UserFactory, BattleFactory, $stateParams, $http, $scope){
    this.user = UserFactory.get({id: $stateParams.id});
    this.battle = BattleFactory.query({id: $stateParams.id});
  }
  
}());
