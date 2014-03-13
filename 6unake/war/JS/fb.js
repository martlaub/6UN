//load and initialize the SDK     
window.fbAsyncInit = function() {
  FB.init({
    appId      : '223636477840164',
    channelUrl : 'http://6unapp.appspot.com/', // Channel File
    status     : true, // check login status
    cookie     : true, // enable cookies to allow the server to access the session
    xfbml      : true,  // parse XFBML
    oauth      : true
  });
  
  FB.Event.subscribe("auth.logout", function() {
      window.top.location = 'http://6unapp.appspot.com/pealeht_enne.html'
    });
  
  FB.Event.subscribe("auth.login", function() {
      window.top.location = 'http://6unapp.appspot.com/pealeht.html'
    });
   
   
//Facebook Login
  FB.Event.subscribe('auth.authResponseChange', function(response) { 
	    if (response.status === 'connected') {
	    	
	      testAPI();
	    } else if (response.status === 'not_authorized') {
	      FB.login();
	    } else {
	      FB.login();
	    }
	  });
	  };

	  (function(d, s, id) {
		  var js, fjs = d.getElementsByTagName(s)[0];
		  if (d.getElementById(id)) return;
		  js = d.createElement(s); js.id = id;
		  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=223636477840164";
		  fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
	  
	  // Load the SDK asynchronously		
	  (function(d){
	   var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
	   if (d.getElementById(id)) {return;}
	   js = d.createElement('script'); js.id = id; js.async = true;
	   js.src = "//connect.facebook.net/en_US/all.js";
	   ref.parentNode.insertBefore(js, ref);
	  }(document));
	  
	  //sisse logimis funkt
	  FB.login(function(response) {
		    if (response.authResponse) {
		        // The person logged into your app
		    } else {
		        // The person cancelled the login dialog
		    }
		});
	  
	//välja logimis funkt
	  FB.logout(function(response) {
	        // Person is now logged out
	    });
	  
	  function testAPI() {
	    console.log('Welcome!  Fetching your information.... ');
	    FB.api('/me', function(response) {
	      console.log('Good to see you, ' + response.name + '.');
	    });
	  }
      
	  