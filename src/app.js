import angular from 'angular';
import uiRouter from 'angular-ui-router';

import { appConfigFn, appRunFn } from './app.config';
import cvComponent from './components/cv';

import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import 'normalize.css';
import './assets/styles/styles.scss';

angular.module('app', [uiRouter, cvComponent])
  .config(appConfigFn)
  .run(appRunFn);