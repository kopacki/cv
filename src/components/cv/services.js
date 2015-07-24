import angular from 'angular';

import CvService from './services/cvService';

const services = angular.module('app.cv.services', [])
  .service('CvService', CvService);

export default services.name;