import angular from 'angular';
import angularMocks from 'angular-mocks';

import servicesModule from '../services';

describe('CV Service', () => {
  let CvService;

  beforeEach(angular.mock.module(servicesModule));

  beforeEach(angular.mock.inject(_CvService_ => {
    CvService = _CvService_;
  }));
  
  describe('Constructor', () => {
    it('Is defined', () => {
      expect(CvService.constructor).toBeDefined();
    });
  });
});