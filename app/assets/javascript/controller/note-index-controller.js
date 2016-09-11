(function () {
    angular
        .module('NoteWrangler')
        .controller('NoteIndexController', NoteIndexController);

    function NoteIndexController(Note, $scope) {
        $scope.notes = Note.query();
        $scope.search = {};
    }
})();
