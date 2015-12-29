/**
 * Created by Mihnea on 12/29/2015.
 */

$http({ method: 'POST', url: '/resource/path.json', data: noteData});

//in routes.js:
angular.module('NoteWrangler')
.config(function($routeProvider){
        $routeProvider.when('/notes', {
            templateUrl: 'templates/pages/notes/index.html',
            controller: function(){}
        })
    });