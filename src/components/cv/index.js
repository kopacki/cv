import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routes from './routes';
import controllers from './controllers';
import services from './services';
import directives from './directives';

import './views/styles.scss';

const component = angular.module('app.cv', [uiRouter, controllers, directives, services])
  .config(routes);

export default component.name;