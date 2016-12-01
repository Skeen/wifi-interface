var main_status = function()
{
}

console.log("loaded status.js!");

app.registerCtrl('statusController', function($scope)
{
     $scope.pageClass = 'page-status';

     console.log("main_status called");
     main_status();
});
