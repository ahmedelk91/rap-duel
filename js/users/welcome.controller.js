"use strict";

(function(){
  angular
  .module("welcomePage")
  .controller("WelcomeShowController", [
    WelcomeShowControllerFunction
  ]);

  function WelcomeShowControllerFunction(){
    console.log("hey");
  }

}());
