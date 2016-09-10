(function () {
    angular
        .module('NoteWrangler')
        .controller('NoteShowController', NoteShowController);

    function NoteShowController(Note, $scope, $routeParams, $location) {
        $scope.note = Note.get({id: $routeParams.id});

        $scope.deleteNote = function (note) {
            note.$remove().then(function() {
                $location.path('/notes')
            });
        }
    }
})();
