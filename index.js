/* https://developer.mozilla.org/en-US/docs/Web/JavaScript */
/* https://devdocs.io/*/
fetch('https://jsonplaceholder.org/users')
  .then(r => r.json())
  .then(body => console.log(body))