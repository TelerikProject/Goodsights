import * as data from 'data';
import { load as loadTemplate } from 'templates';

/*
import homeTemplate from 'homeTemplate!text';
const template = Handlebars.compile(homeTemplate);
*/


const $appContainer = $('#app-container');

export function get(params) {
  const { category } = params;

var templateName = (location.hash).slice(2);

  Promise.all([
    loadTemplate(`${templateName}`),
    //data.getCookies()
  ])
  .then(([template, data]) => {
    $appContainer.html((template(data)));
  });
}
