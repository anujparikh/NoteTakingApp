(function () {
    angular
        .module('NoteWrangler')
        .controller('NoteShowController', NoteShowController);

    function NoteShowController(Note, $scope, $routeParams) {
        $scope.note = Note.get({id: $routeParams.id});
    }
})();
