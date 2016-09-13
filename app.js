"use strict";

(function(){
  angular
  .module("rap-duel", ['ui.router'])

  /**************CONFIG STATE DEFINITIONS*****************/
  .config([
    '$stateProvider',
    '$urlRouterProvider',

    function($stateProvider, $urlRouterProvider){

      $stateProvider
      .state('welcome', {
        url: '/',
        templateUrl: '/welcome.html',
        controller: 'signUpController'
        /*********** DEFINE SIGNUP CONTROLLER LATER *******/
      })

      .state('home', {
        url: '/home',
        templateUrl: '/home.html',
        controller: 'UsersCtrl'
      })

      .state('user', {
        url: "/users/{{user.id}}",
        templateUrl: '/user.html',
        controller: 'showUserCtrl'
      });

      $urlRouterProvider.otherwise('home');

    }])

    /*******************END CONFIG**********************/

    /*******************FACTORY DEFINITION**************/
    .factory('users', [
      function(){
        var o = {
          users: []
        };
        return o;
      }
    ])
    /*******************END FACTORY**********************/

    .controller("UsersCtrl", [
      "$scope",
      "users",
      usersControllerFunction
    ])

    .controller("MainCtrl", [
      "$scope",
      "users",
      '$stateParams',
      usersControllerFunction
    ])
    
    .controller("showUserCtrl", [
      "$scope",
      "users",
      "$stateParams",
      "battles",
      showUserController,
      battlesControllerFunction
    ])
    /**********************CONTROLLER FUNCTIONS******************************/
    function usersControllerFunction($scope, users)
    {
      $scope.users = users.users;
      //hardcoded data
      $scope.users = [
        {
          rap_name : 'Mos Def',
          image_url: "http://s1.evcdn.com/images/edpborder500/I0-001/004/337/040-0.jpeg_/mos-def-40.jpeg",
          city     : "Brooklyn, NY",
          id       : 1,
          description: "Fun loving hip hoper!"
        },
        {
          rap_name : 'Black Thought',
          image_url: "http://static.djbooth.net/pics-features/black-thought-hly-sht-harvard.jpg",
          city     :"Philadelphia, PA",
          id       : 2,
          description: "I love me some battle rap!"
        },
        {
          rap_name : 'Eminem',
          image_url: "http://ceoworld.biz/ceo/wp-content/uploads/2009/09/eminem-pic.jpg",
          city     :"Detroit, MI",
          id       : 3,
          description: "Everyone's favorites villian!"
        }
      ]

            $scope.users.push({
              rap_name: $scope.rap_name,
              image_url: $scope.image_url,
              city: $scope.city,
              description: $scope.description,
              battles:
              [
                {
                  title: "Thrilla in Manilla",
                  challenger_name: "Nas",
                  audio1_Url: "#",
                  audio2_Url: "#"},
                  {
                    title: "Rumble in the Jungle",
                    challenger_name: "DMX",
                    audio1_Url: "#",
                    audio2_Url: "#"}
                  ]
                });

                //form to create a new battle
                $scope.addUser =  function()
                {
                  //prevents a user from submitting a blank battle
                  if(!$scope.rap_name || $scope.rap_name === '') {return; }
                  $scope.users.push({
                    rap_name: $scope.rap_name,
                    image_url: $scope.image_url,
                    city: $scope.city,
                    description: $scope.description
                  });
                  $scope.rap_name = '';
                  $scope.image_url = '';
                  $scope.city = '';
                  $scope.description = '';
                  console.log(users);
                };

              }

              /**************************END USERS CONTROLER FUNCTION*********************/
              function showUserController($scope, user, $stateParams){
                $scope.users = users.users;
                console.log($scope.users);
              }

              function battlesControllerFunction($scope, users, $stateParams)
              {
                $scope.user = users.users[$stateParams.id];
                console.log(user.id);
                $scope.addBattle = function()
                {
                  if($scope.title === '') {return;}
                  $scope.user.battles.push({
                                            title: $scope.title,
                                            challenger_name: 'user',
                                            audio1_Url: $scope.audio1_Url,
                                            audio2_Url: $scope.audio2_Url
                                          });
                  $scope.title = '';
                  $scope.challenger_name = '';
                  $scope.audio1_Url = '';
                  $scope.audio2_Url = '';
                };
              }


            })();
