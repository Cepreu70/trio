var getScope = function(nameCtrl){
    console.log(angular.element(document.getElementById(nameCtrl)).scope());
    return angular.element(document.getElementById(nameCtrl)).scope();
};