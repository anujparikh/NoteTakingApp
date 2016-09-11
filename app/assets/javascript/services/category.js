(function () {
    angular
        .module('NoteWrangler')
        .factory('Category', CategoryFactory);

    function CategoryFactory($resource) {
        return $resource('/categories/:id');
    }
})();