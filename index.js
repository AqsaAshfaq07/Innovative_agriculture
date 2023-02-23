gapi.load('auth2', function() {
    gapi.auth2.init({
      client_id: 'YOUR_CLIENT_ID',
    });
  });
  
  gapi.signin2.render('google-signin-button', {
    'scope': 'profile email',
    'longtitle': true,
  });
  