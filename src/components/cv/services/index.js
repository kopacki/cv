import angular from 'angular';

import CvService from './cvService.js';
import PersonalDataValue from './personalDataValue.js';

const services = angular.module('app.cv.services', [])
  .service('CvService', CvService)
  .value('PersonalDataValue', PersonalDataValue);

export default services.name;