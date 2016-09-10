(function () {
    angular
        .module('NoteWrangler')
        .factory('User', UserFactory);

    function UserFactory($resource) {
        return $resource('/users/:id');
    }
})();