fetch('https://api.codetabs.com/v1/proxy?quest=URL_you_want_to_fetch')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.text().then(function(data) {
        // data contains all the plain html of the url you previously set, 
        // you can use it as you want, it is typeof string
        console.log(data)
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
