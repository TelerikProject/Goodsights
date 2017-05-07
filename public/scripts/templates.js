import { get as getRequest } from 'requester';
// import { Handlebars } from 'handlebars'; // FIX ME

const cacheObj = {};

export function load(templateName) {
  if(cacheObj.hasOwnProperty(templateName)) {
    return Promise.resolve(cacheObj[templateName]);
  }

  return getRequest(`templates/${templateName}.html`)
    .then(template => {
      const compiledTemplate = Handlebars.compile(template);
      cacheObj[templateName] = compiledTemplate;
      return Promise.resolve(compiledTemplate);
    });
}
