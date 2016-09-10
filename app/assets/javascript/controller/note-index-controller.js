(function () {
    angular
        .module('NoteWrangler')
        .controller('NoteIndexController', NoteIndexController);

    var vm = this;

    function NoteIndexController(Note, $scope) {
        $scope.notes = Note.query();
    }
})();
