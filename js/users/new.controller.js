"use strict";

(function(){
  angular
  .module( "users" )
  .controller( "UserNewController", "BattleNewController" [
    "UserFactory",
    "BattleFactory",
    "$state",
    UserNewControllerFunction,
    BattleNewControllerFunction
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

  function BattleNewControllerFunction(BattleFactory){
    this.battle = new BattleFactory();
    this.create = function(){
      this.battle.$save()
    }
  }
}());
