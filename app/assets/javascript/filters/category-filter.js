(function () {
    angular
        .module('NoteWrangler')
        .filter('categoryFilter', categoryFilter);

    function categoryFilter() {
        return function (collection, category) {
            var newCollection = [];
            if (category && category.id) {
                for (var i = 0, l = collection.length; i < l; i++) {
                    if (collection[i].categoryId === category.id) {
                        newCollection.push(collection[i]);
                    }
                }
                return newCollection;
            }
            else {
                return collection;
            }
        }
    }
})();