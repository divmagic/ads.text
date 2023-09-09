var xhr = new XMLHttpRequest();
xhr.open("GET", "https://one.akw.cam/", true);
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var sourceCode = xhr.responseText;
    console.log(sourceCode);
  } else if (xhr.readyState === 4) {
    console.error("Error:", xhr.status);
  }
};
xhr.send();
