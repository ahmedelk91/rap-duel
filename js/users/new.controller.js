"use strict";

(function(){
  angular
  .module( "users" )
  .controller( "UserNewController",  [
    "UserFactory",
    "$state",
    UserNewControllerFunction,
  ]);

  function UserNewControllerFunction(UserFactory, $state){
    var vm = this;
    vm.user = new UserFactory();
    vm.create = function(){
      vm.user.$save().then(function(){
        $state.go("userIndex")
      })
    }
  }
}());
