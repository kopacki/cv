import angular from 'angular';

import MainController from './mainController';

const controllers = angular.module('app.cv.controllers', [])
  .controller('MainController', MainController);

export default controllers.name;