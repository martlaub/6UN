//load and initialize the SDK     
window.fbAsyncInit = function() {
  FB.init({
    appId      : '595499483860028',
    channelUrl : 'http://ounake-app.appspot.com/', // Channel File
    status     : true, // check login status
    cookie     : true, // enable cookies to allow the server to access the session
    xfbml      : true,  // parse XFBML
    oauth      : true
  });
  
  FB.Event.subscribe("auth.logout", function() {
	  document.getElementById('peida').style.display = "none"; 
	  if(window.location.pathname=='/retseptid.html' || window.location.pathname=='/_unake.html'){
			window.location.href = 'pealeht.html';
			} 
    });
  
  FB.Event.subscribe("auth.login", function() { 
	  document.getElementById('peida').style.display = "block";
    });
   
  
  FB.getLoginStatus(function(response) {
	  if (response.status === 'connected') {
		  document.getElementById('peida').style.display = "block";
		  
	  } else if (response.status === 'not_authorized') {
		  if(window.location.pathname=='/retseptid.html' || window.location.pathname=='/_unake.html'){
			  window.location.href = 'pealeht.html';
				} 
	  } else {
		  if(window.location.pathname=='/retseptid.html' || window.location.pathname=='/_unake.html'){
			  window.location.href = 'pealeht.html';
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
	  
	  