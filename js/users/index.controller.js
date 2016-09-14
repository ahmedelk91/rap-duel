"use strict";

(function(){
  angular
  .module("users")
  .controller("UserIndexController", [
    "UserFactory",
    UserIndexControllerFunction
  ]);

  function UserIndexControllerFunction(UserFactory){
    this.users = UserFactory.query();
  }

}());
