import 'jquery';

import { MyRouter } from 'myRouter';
import * as multipleController from 'multipleController';
import { userController } from 'userController';
import { userRequester } from 'userRequester';

const router = new MyRouter();


router
  .on('', () => location.hash = '#/home') // fix later
  .on('/', () => location.hash = '#/home')
  .on('/home', multipleController.get)
  .on('/contact', multipleController.get)
  .on('/sights', multipleController.get)
  .on('/about', multipleController.get)
  .on('/team', multipleController.get)
  .on('/login', userController.login)
  .on('/register', userController.register);


$(window).on('load', () => router.navigate());
$(window).on('hashchange', () => router.navigate());
