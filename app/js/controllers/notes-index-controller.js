angular.module('NoteWrangler')
    .controller('NotesIndexController', function($scope, $http, Note, Session) {
  // Without NgResource
  // Note.all().success(function(data) {
  //   $scope.notes = data;
  // });
  
  // With NgResource
  $scope.notes = Note.query();

  Session.sessionData().success(function(sessionUser) {
    // Create a new User from the session user data
    $scope.loggedIn = !!sessionUser;
  });

      var controller = this;
      $http({method: 'GET', url: '/notes'}).success(function(data){
        controller.notes = data;
      })

});
