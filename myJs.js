
(function(){
 
var app=angular.module('Message', []);

app.controller('getmessageAllUser',function(){
   
  this.chat=$chat.getAllMessage();
  this.addMessage=function(value){
   var newValue = value.replace(/\s+/g, '');
   if($chat.isAuthorize()&& newValue.length>=1)
   $chat.sentMessage("Вася",value);
   }           
});

app.controller('loginCtrl',function($scope){
    $scope.login=$chat.login;
    $scope.isAuthorize=$chat.isAuthorize;
    $scope.getNameUser=$chat.getNameUser;
    $scope.register=$chat.register;
    $scope.logOut=$chat.logOut;
});
})();
