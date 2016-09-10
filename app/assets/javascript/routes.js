(function() {
    angular
        .module('NoteWrangler')
        .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    redirectTo: '/notes'
                })

                .when('/notes', {
                    templateUrl: 'assets/templates/notes/index.html',
                    controller: "NoteIndexController",
                    controllerAs: "indexCtrl"
                })

                .when('/notes/new', {
                    templateUrl: 'assets/templates/notes/new.html',
                    controller: "NoteCreateController"
                })

                .when('/notes/:id', {
                    templateUrl: 'assets/templates/notes/show.html',
                    controller: "NoteShowController"
                })

                .when('/notes/:id/edit', {
                    templateUrl: 'assets/templates/notes/edit.html',
                    controller: "NoteEditController"
                })
        });
})();