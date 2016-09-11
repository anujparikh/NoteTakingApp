(function () {
    angular
        .module('NoteWrangler')
        .directive('nwPageNav', nwPageNav);

    function nwPageNav() {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'assets/templates/directives/nwPageNav.html',
            controller: function($scope, $location) {
                $scope.isPage = function(name) {
                    return new RegExp("/" + name + "($|/)").test($location.path());
                }
            }
        }
    }
})();