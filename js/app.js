// app.js

// Define our application, as specify dependency on;
// ngRoute   - Routing
// ngAnimate - Page animation 
var app = angular.module('interface', ['ngRoute', 'ngAnimate']);

//---------//
// ROUTING //
//---------//
// We setup the routing table, each route uses it's own controller.
app.config(function($routeProvider, $controllerProvider, $sceDelegateProvider)
{
    $sceDelegateProvider.resourceUrlWhitelist([
        // Allow same origin resource loads.
        'self',
        // Allow loading from our assets domain. 
        partials_path + '**',
        javascript_path + '**'
    ]);

    // Save controllerProvider's register for later
    app.registerCtrl = $controllerProvider.register;
    // Function to resolve javascript dependencies of partials
    app.resolveScriptDeps = function(dependencies)
    {
        return function($q,$rootScope)
        {
            var deferred = $q.defer();
            var length = dependencies.length;

            function recursive(current)
            {
                var dependency = dependencies[current];
                alert(dependency);
                    
                $script(dependency, function()
                {
                    if(current+1 < length)
                    {
                        recursive(current+1);
                    }
                    else
                    {
                        deferred.resolve();
                    }
                });
            };
            recursive(0);

            return deferred.promise;
        }
    };

    // Setup routing
    $routeProvider
        // main page
        .when('/', {
            templateUrl: partials_path + 'main.html',
            controller: 'mainController',
            resolve: {deps: app.resolveScriptDeps([
                javascript_path + 'partials/main.js'
            ])}
        })

        // stl page
        .when('/STL', {
            templateUrl: partials_path + 'stl.html',
            controller: 'stlController',
            resolve: {deps: app.resolveScriptDeps([
                javascript_path + 'js/stl-viewer/Three.js',
                javascript_path + 'js/stl-viewer/plane.js',
                javascript_path + 'js/stl-viewer/thingiview.js',
                javascript_path + 'partials/stl.js'
            ])}
        })

        // gcode page
        .when('/GCODE', {
            templateUrl: partials_path + 'gcode.html',
            controller: 'gcodeController',
            resolve: {deps: app.resolveScriptDeps([
                javascript_path + 'partials/gcode.js'
            ])}
        })

        // status page
        .when('/STATUS', {
            templateUrl: partials_path + 'status.html',
            controller: 'statusController',
            resolve: {deps: app.resolveScriptDeps([
                javascript_path + 'partials/status.js'
            ])}
        })

        // control page
        .when('/CONTROL', {
            templateUrl: partials_path + 'control.html',
            controller: 'controlController',
            resolve: {deps: app.resolveScriptDeps([
                javascript_path + 'partials/control.js'
            ])}
        })

        // options page
        .when('/OPTIONS', {
            templateUrl: partials_path + 'options.html',
            controller: 'optionsController',
            resolve: {deps: app.resolveScriptDeps([
                javascript_path + 'partials/options.js'
            ])}
        })

        // anything else --> redirect to main page
        .otherwise({
            redirectTo: '/'
        });
});

//-------------//
// CONTROLLERS //
//-------------//
// main controller in main.js
// stl controller in stl.js
// gcode controller in gcode.js
// status controller in status.js
// control controller in control.js
// options controller in options.js
