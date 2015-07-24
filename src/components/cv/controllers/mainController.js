import angular from 'angular';

let _scope;

class MainController {
  constructor($scope) {
    _scope = $scope;
  }
}

MainController.$inject = ['$scope'];

export default MainController;