angular.module("rap-duel", [])
.controller("MainCtrl", [
  "$scope",
  function($scope){
    //hardcoded data
    $scope.battles = [
      {title: 'battle 1', user_name1: "Eminem", user_name2: "Benzino", audio1_Url: "#", audio2_Url:"#"},
      {title: 'battle 2', user_name1: "KRS-ONE", user_name2: "MC Shan" , audio1_Url: "#", audio2_Url:"#"},
      {title: 'battle 3', user_name1: "2pac", user_name2: "Notorious B.I.G.", audio1_Url: "#", audio2_Url:"#"}
    ]
    //form to create a new battle
    $scope.addBattle = function(){
      //prevents a user from submitting a blank battle
      if(!$scope.title || $scope.title === '') {return; }
      if(!$scope.user_name1 || $scope.user_name1 === '') {return; }
      if(!$scope.audio1_Url || $scope.audio1_Url === '') {return; }
      $scope.battles.push({
        title: $scope.title,
        user_name1: $scope.user_name1,
        audio1_Url: $scope.audio1_Url,
        user_name2: $scope.user_name2,
        audio2_Url:$scope.audio2_Url
      });
      $scope.title = '';
      $scope.user_name1 = '';
      $scope.audio1_Url = '';
      $scope.user_name2 = '';
      $scope.audio2_Url = '';
    };
  }]);
