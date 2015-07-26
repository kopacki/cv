import angular from 'angular';

let _scope;
let _cvService;

class MainController {
  constructor($scope, cvService) {
    _scope = $scope;
    _cvService = cvService;

    this.getCvSections();
  }

  getCvSections() {
    this.sections = _cvService.getCvData();
  }
}

MainController.$inject = ['$scope', 'CvService'];

export default MainController;