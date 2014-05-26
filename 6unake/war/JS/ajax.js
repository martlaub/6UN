var loe;
var $i;

function laeRaamat($id) {
  console.log('retsept.jsp?id='+$id)
  $i=$id;
 //$("#content-wrap").load('retsept.jsp?id='+$id);

};


$(function(){
	  
	  // These two properties, set after jQuery and the hashchange event plugin are
	  // loaded, only need to be used when document.domain is set (to fix the "access
	  // denied" error in IE6/7).
	 // $.fn.hashchange.href = '/pealeht.html';
	  //$.fn.hashchange.domain = document.domain;
	
	  // Bind an event to window.onhashchange that, when the hash changes, gets the
	  // hash and adds the class "selected" to any matching nav link.
	  $(window).hashchange( function(){
	    var hash = location.hash;
	    
	    // Set the page title based on the hash.
	    //document.title = 'The hash is ' + ( hash.replace( /^#/, '' ) || 'blank' ) + '.';
	    
	    if(hash.replace( /^#/, '' )){
	    	$("#content-wrap").load('retsept.jsp?id='+$i);
	    	loe="1";
	    }
	    if(!hash.replace( /^#/, '' ) && loe=="1" && window.location.pathname=='/raamatud.jsp'){
	    	//window.alert("id");
	    	window.location.reload(true);
	    	loe="2";
	    }
	  });
	  
	  // Since the event is only triggered when the hash changes, we need to trigger
	  // the event now, to handle the hash the page may have loaded with.
	  $(window).hashchange();
	  
	});