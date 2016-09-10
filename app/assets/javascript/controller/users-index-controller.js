(function () {
    angular
        .module('NoteWrangler')
        .controller('UsersIndexController', UsersIndexController);

    var vm = this;

    function UsersIndexController(User, $scope) {
        $scope.users = User.query();
    }
})();
