angular.module("rap-duel", ['ui.router'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider){

    $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    })

    .state('users', {
      url: 'users/{id}',
      templateUrl: '/users.html',
      controller: 'UsersCtrl'
    });

    $urlRouterProvider.otherwise('home');
  }])
  .factory('users', [function(){
    var o = {
      users: []
    };
    return o;
  }])
  .controller("UsersCtrl", [
    '$scope',
    '$stateParams',
    'users',
    function($scope, $stateParams, users){
      $scope.user = users.users[$stateParams.id];
      $scope.addBattle = function(){
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
    }])
    .controller("MainCtrl", [
      "$scope",
      'users',
      function($scope, users){
        $scope.users = users.users;
        //hardcoded data
        $scope.users = [
          {rap_name: 'Mos Def', image_url: "http://s1.evcdn.com/images/edpborder500/I0-001/004/337/040-0.jpeg_/mos-def-40.jpeg", city: "Brooklyn, NY", description: "Fun loving hip hoper!"},
          {rap_name: 'Black Thought', image_url: "http://static.djbooth.net/pics-features/black-thought-hly-sht-harvard.jpg", city:"Philadelphia, PA", description: "I love me battle rap!"},
          {rap_name: 'Eminem', image_url: "http://ceoworld.biz/ceo/wp-content/uploads/2009/09/eminem-pic.jpg", city:"Detroit, MI", description: "Everyone's favorite villian!"}
        ]
        $scope.users.push({
          rap_name: $scope.rap_name,
          image_url: $scope.image_url,
          city: $scope.city,
          description: $scope.description,
          battles: [
            {title: "Thrilla in Manilla", challenger_name: "Nas", audio1_Url: "#", audio2_Url: "#"},
            {title: "Rumble in the Jungle", challenger_name: "DMX", audio1_Url: "#", audio2_Url: "#"}
          ]
        });
        //form to create a new battle
        $scope.addUser = function(){
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
        };
      }]);
