var main_options = function()
{
}

console.log("loaded options.js!");

app.registerCtrl('optionsController', function($scope)
{
     $scope.pageClass = 'page-options';

     console.log("main_options called");
     main_options();
});
