(function(){
    var _store=[];
    var _currentUser;
    function _message(to,message){
        return {
            from:_currentUser.name,
            to:to,
            message:message,
            data:new Date()
            }
    };
    function saveState(){
        localStorage.setItem('messageHistory',JSON.stringify(_store));
    };
    function restoreState(){
      _store=JSON.parse(localStorage.getItem('messageHistory'))||[];  
    };
    
    this.sentMessage=function(to,message){
        _store.push(_message(to,message));
    };
    this.getAllMessage=function(){
        return _store;
    };
    this.login=function(login,password){
        _currentUser={name:'Олег'};
    }
    this.isAuthorize=function(){
        return !!_currentUser;
    }
    restoreState();
    window.$chat=this;
    window.onbeforeunload = function () {
        saveState();
    };
    
})();