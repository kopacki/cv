const locals = {
  'pageTitle': 'Curriculum vitae'
};

function appConfigFn($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');

 // $rootScope.locals = locals;
}
appConfigFn.$inject = ['$urlRouterProvider', '$locationProvider'];

export default appConfigFn;