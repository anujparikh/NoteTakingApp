(function () {
    angular
        .module('NoteWrangler')
        .controller('UsersShowController', UsersShowController);

    function UsersShowController(User, $scope, $routeParams) {
        $scope.user = User.get({id: $routeParams.id});
    }
})();
