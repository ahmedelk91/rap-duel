"use strict";

(function(){
  angular
  .module( "users" )
  .controller( "UserNewController", [
    "UserFactory",
    UserNewControllerFunction
  ]);

  function UserNewControllerFunction(UserFactory){
    this.user = new UserFactory();
    this.create = function(){
      this.user.$save()
    }
  }
}());
