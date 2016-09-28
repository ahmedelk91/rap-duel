"use strict";

(function(){
  angular
  .module( "battles" )
  .factory( "BattleFactory", [
    "$resource",
    BattleFactoryFunction,
  ])

  function BattleFactoryFunction( $resource ){
    return $resource( "http://localhost:3002/users/:id", {}, {
        update: { method: "PUT" }
      });
    }
  }());
