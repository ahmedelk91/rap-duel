"use strict";

(function(){
  angular
  .module( "users" )
  .factory( "UserFactory", "BattleFactory" [
    "$resource",
    UserFactoryFunction,
    BattleFactoryFunction
  ])

  function UserFactoryFunction( $resource ){
    return $resource( "http://localhost:3002/users/:id", {}, {
      update: { method: "PUT" }
    });
  }

  function BattleFactoryFunction($resource){
    return $resource("http://localhost:3002/users/:id", {}, {
      update: { method: "PUT" }
    });
  }
}());``
