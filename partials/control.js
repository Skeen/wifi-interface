var main_control = function()
{
}

console.log("loaded control.js!");

app.registerCtrl('controlController', function($scope)
{
     $scope.pageClass = 'page-control';

     console.log("main_control called");
     main_control();
});
