"use strict";

(function(){
  angular
  .module("users")
  .controller("UserEditController", [
    "UserFactory",
    "$stateParams",
    "$state",
    UserEditControllerFunction
  ]);

  function UserEditControllerFunction( UserFactory, $stateParams, $state ){
    this.user = UserFactory.get({id: $stateParams.id});
    // console.log(this.user);
    this.update = function(){
      this.user.$update({id: $stateParams.id}).then(function(){
        $state.go("userIndex")
      });
    }
    var vm = this;
    vm.destroy = function(){
      vm.user.$delete({id: $stateParams.id}).then(function(){
        $state.go("userIndex")
      })
    }
  }
}());
