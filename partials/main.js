var main_main = function()
{
    document.getElementById('upload').addEventListener('change', handle_file, false);
}

function load_stl(text)
{
    alert('load_stl');
    alert(text);
    localStorage["stl"] = text;
}

function load_gcode(text)
{
}

function handle_file(evt)
{
    if (!evt.target.files.length) 
    {
        alert('Please select a file!');
        return;
    }
    var file = evt.target.files[0];
    var file_extension = file.name.split('.').pop();

    var reader = new FileReader();

    if(file_extension == "stl")
    {
        alert("stl file!");
        reader.onload = function(e) {
            load_stl(reader.result);
        };
        reader.readAsBinaryString(file);

        location.href = "index.html#/STL";
    }
    else if(file_extension == "gcode")
    {
        alert("gcode file!");
        reader.onload = function(e) {
            load_gcode(reader.result);
        };
        reader.readAsText(file);

        location.href = "index.html#/GCODE";
    }
    else
    {
        alert("Unknown file extension: " + file_extension);
    }
}

console.log("loaded main.js!");

app.registerCtrl('mainController', function($scope)
{
     $scope.pageClass = 'page-main';

     console.log("main_main called");
     main_main();
});
