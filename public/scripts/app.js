import 'jquery';

import { MyRouter } from 'myRouter';
import * as multipleController from 'multipleController';
import { userController } from 'userController';
import { userRequester } from 'userRequester';
import {load as loadTemplate} from 'templates';
import  toastr from 'toastr';

const router = new MyRouter();


router
  .on('', () => location.hash = '#/home',multipleController.get) // fix later
  .on('/', () => location.hash = '#/home')
  .on('/home', multipleController.get)
  .on('/contact', multipleController.get)
  .on('/sights', userController.sights)
  .on('/sightsAll', multipleController.get)
  .on('/about', multipleController.get)
  .on('/team', multipleController.get)
  .on('/login', userController.login)
  .on('/logout', userController.logout)  
  .on('/register', userController.register);


$(window).on('load', () => router.navigate());
$(window).on('hashchange', () => router.navigate());
