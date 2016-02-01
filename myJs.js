
(function(){
 
var app=angular.module('Message', []);

app.controller('getmessageAllUser',function(){
   
  this.chat=$chat.getAllMessage();
  this.addMessage=function(value){
   $chat.sentMessage("Вася",value);  
  }           
});

app.controller('loginCtrl',function($scope){
    $scope.login=$chat.login;
    $scope.isAuthorize=$chat.isAuthorize;
});
})();
