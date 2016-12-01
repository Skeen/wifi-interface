var main_stl = function()
{
    //thingiurlbase = "../js/stl-viewer";
    //alert(thingiurlbase);
    thingiview = new Thingiview("viewer");
    thingiview.setObjectColor('#C0D8F0');
    thingiview.setObjectMaterial('solid');
    thingiview.setRotation(true);
    thingiview.setCameraView('diagonal');
    thingiview.setShowPlane(false);
    thingiview.initScene();
    thingiview.loadSTL("https://raw.githubusercontent.com/tbuser/thingiview.js/master/examples/objects/cube.stl");
/*
    var text = localStorage["stl"];
    alert('main_stl');
    alert(text);
    thingiview.loadSTLString(text);
*/
    document.getElementById('slice').disabled = false;
}

function slice_file()
{
    alert("Slicing Engine not found!");
}

console.log("loaded stl.js!");

app.registerCtrl('stlController', function($scope)
{
     $scope.pageClass = 'page-stl';

     console.log("main_stl called");
     main_stl();
});
