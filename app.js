fetch("https://one.akw.cam/")
  .then(response => response.text())
  .then(data => {
    var htmlElement = document.createElement('html');
    htmlElement.innerHTML = data;
    document.body.appendChild(htmlElement);
  })
  .catch(error => console.error(error));
