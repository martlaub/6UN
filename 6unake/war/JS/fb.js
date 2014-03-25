
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
	 
      window.top.location = 'http://6unapp.appspot.com/pealeht_enne.html';
      
    });
  
  FB.Event.subscribe("auth.login", function() { 
	  window.top.location = 'http://6unapp.appspot.com/pealeht.html';
    });
   
   
  FB.getLoginStatus(function(response) {
	  if (response.status === 'connected') {
		  
	  } else if (response.status === 'not_authorized') {
		  if(window.location!='http://6unapp.appspot.com/pealeht_enne.html'){
				window.top.location = 'http://6unapp.appspot.com/pealeht_enne.html';
				}
	  } else {
		  if(window.location!='http://6unapp.appspot.com/pealeht_enne.html'){
				window.top.location = 'http://6unapp.appspot.com/pealeht_enne.html';
				}
	  }
	  });
  
	  };

	  // Load the SDK asynchronously		
	  (function(d){
	   var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
	   if (d.getElementById(id)) {return;}
	   js = d.createElement('script'); js.id = id; js.async = true;
	   js.src = "//connect.facebook.net/en_US/all.js";
	   ref.parentNode.insertBefore(js, ref);
	  }(document));
	  
	  