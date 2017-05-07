import * as data from 'data';
import { load as loadTemplate } from 'templates';

/*
import homeTemplate from 'homeTemplate!text';
const template = Handlebars.compile(homeTemplate);
*/

const $appContainer = $('#app-container');

export function get(params) {
  const { category } = params;

  Promise.all([
    loadTemplate('register'),
    //data.getCookies()
  ])
  .then(([template, data]) => {
    $appContainer.html((template(data)));
  });
}