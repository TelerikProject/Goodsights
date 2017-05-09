import { load as loadTemplate } from 'templates';


const $appContainer = $('#app-container');

export function get(params) {
  const { category } = params;

  var templateName = (location.hash).slice(2);

  Promise.all([
    loadTemplate(`${templateName}`),
  ])
    .then(([template, data]) => {
      $appContainer.html((template(data)));
    });
}
