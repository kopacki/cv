import angular from 'angular';

import cvPageDirective from './cvPageDirective';

const directives = angular.module('app.cv.directives', [])
  .directive('cvPage', cvPageDirective);

export default directives.name;