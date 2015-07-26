import angular from 'angular';
import angularMocks from 'angular-mocks';

import servicesModule from '../services';

describe('CV Service', () => {
  let CvService;
  let PersonalDataValue;

  beforeEach(angular.mock.module(servicesModule));

  beforeEach(angular.mock.inject((_CvService_, _PersonalDataValue_) => {
    CvService = _CvService_;
    PersonalDataValue = _PersonalDataValue_;
  }));
  
  describe('Constructor', () => {
    it('Is defined', () => {
      expect(CvService.constructor).toBeDefined();
    });
  });

  describe('GetCvData', () => {
    it('Returns object with data', () => {
      let cvData = CvService.getCvData();
      expect(cvData).toBeDefined();
    });
  });
});