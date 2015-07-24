import angular from 'angular';
import uiRouter from 'angular-ui-router';

import appConfigFn from './app.config';
import cvComponent from './components/cv/index';

import 'normalize.css';
import './assets/styles/styles.scss';

angular.module('app', [uiRouter, cvComponent])
  .config(appConfigFn);