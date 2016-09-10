(function () {
    angular
        .module('NoteWrangler')
        .factory('Note', NoteFactory);

    var vm = this;

    function NoteFactory($resource) {
        return $resource('/notes/:id', {id: "@id"}, {
            update: {
                method: "PUT"
            }
        });
    }
})();