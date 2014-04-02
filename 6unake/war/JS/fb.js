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
  
  FB.getLoginStatus(function(response) {
	  if (response.status === 'connected') {
		  getUserInfo();
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
		    
//sisse logimine
function Login(){
	FB.login(function(response) {
		if (response.authResponse){
				    	getUserInfo();
				    	document.getElementById('peida').style.display = "block";
		  			} else {
		  					}
				 	},{scope: 'email,user_photos,user_videos'});
			}

//kasutaja info ja välja logimis nupp
function getUserInfo() {
    FB.api('/me', function(response) {   	
		var str ="<img src='images/logout_FB.png' style='cursor:pointer; width: 10em;' onclick='Logout()'/></br>";
			 document.getElementById("status").innerHTML=str; 	  	    
		    							});
		    }

//välja logimis funkt.
function Logout(){
	FB.logout(function(){
		document.location.reload();
		if(window.location.pathname=='/retseptid.html' || window.location.pathname=='/_unake.html'){
    		window.location.href = 'pealeht.html';
				}
						});
			}

// Load the SDK asynchronously
(function(d){
	   var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
	   if (d.getElementById(id)) {return;}
	   js = d.createElement('script'); js.id = id; js.async = true;
	   js.src = "//connect.facebook.net/en_US/all.js";
	   ref.parentNode.insertBefore(js, ref);
	  }(document));