routes.$inject = ['$stateProvider'];

function routes($stateProvider) {
  $stateProvider
    .state('main', {
      url: '/',
      template: require('../views/cvPage.html'),
      controller: 'MainController',
      controllerAs: 'cv'
    });
}

export default routes;