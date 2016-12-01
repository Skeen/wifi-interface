var main_gcode = function()
{
}

console.log("loaded gcode.js!");

app.registerCtrl('gcodeController', function($scope)
{
     $scope.pageClass = 'page-gcode';

     console.log("main_gcode called");
     main_gcode();
});
