const locals = {
  'pageTitle': 'Curriculum vitae'
};

function appConfigFn($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
}
appConfigFn.$inject = ['$urlRouterProvider', '$locationProvider'];

function appRunFn ($rootScope) {
  $rootScope.locals = locals;
}
appRunFn.$inject = ['$rootScope'];

export { appConfigFn, appRunFn };