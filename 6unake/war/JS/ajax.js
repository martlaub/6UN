var laeRaamat = function($id) {
  console.log('retsept.jsp?id='+$id)
 $("#content-wrap").load('retsept.jsp?id='+$id);

};