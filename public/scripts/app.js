import 'jquery';

import { MyRouter } from 'myRouter';
import * as multipleController from 'multipleController';
import { UserController } from 'userController';
import { UserRequester } from 'userRequester';

let baseUrl = "https://baas.kinvey.com";
let appKey = "kid_By7HTRjkb"; // appKey from Kinvey
let appSecret = "26301ce0be5e4d5d9c3011f55abe3c70"; // appSecret from Kinvey
let _guestCredentials = "e512b4db-c694-4857-9fbf-3f769bfaea47.3AEKPjzf8qigMP7iu04DQwOBsmvalZSqp9agZqmEMDU="; // Created a guest user using PostMan/RESTClient/Fiddler and placed his authtoken here

const userRequester = new UserRequester(baseUrl, appKey, appSecret, _guestCredentials)
const userController = new UserController(userRequester);

const router = new MyRouter();

router
  .on('', () => location.hash = '#/home') // fix later
  .on('/', () => location.hash = '#/home')
  .on('/home', multipleController.get)
  .on('/contact', multipleController.get)
  .on('/sights', multipleController.get)
  .on('/login', userController.login)
  .on('/register', userController.register);


$(window).on('load', () => router.navigate());
$(window).on('hashchange', () => router.navigate());
