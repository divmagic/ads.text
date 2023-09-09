var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
var targetUrl = 'https://ak.sv/';

fetch(proxyUrl + targetUrl)
  .then(response => response.text())
  .then(data => {
    console.log(data);
  })
  .catch(error => console.error(error));
