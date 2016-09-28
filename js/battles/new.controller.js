"use strict";

(function(){
  angular
  .module( "battles" )
  .controller( "BattleNewController",  [
    "BattleFactory",
    "$state",
    BattleNewControllerFunction,
  ]);

  function BattleNewControllerFunction(BattleFactory, $state){
    var vm = this;
    vm.battle = new BattleFactory();
    vm.create = function(){
      vm.battle.$save()
      })
    }
  }());
