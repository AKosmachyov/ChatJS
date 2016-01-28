(function(){
var app=angular.module('Message',[]);
app.controller('getmessageAllUser',function(){
  this.messageObj=arrayMessage;
});
var arrayMessage=[
  {
    name:'Вася',
    comment:'вава'
  },
  {
    name:'Петя',
    comment:'ваsdadва'
  }
];
})();
