const locals = {
  'pageTitle': 'Curriculum vitae',
  'footerNote': 'I hereby give consent for my personal data included in my offer to be processed for the purposes of recruitment, in accordance with the Personal Data Protection Act dated 29.08.1997 (uniform text: Journal of Laws of the Republic of Poland 2002 No 101, item 926 with further amendments).'
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