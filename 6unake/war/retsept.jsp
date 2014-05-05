<%@ page contentType="text/html; charset=UTF-8" language="java" %>
<%@ page import="java.util.List" %>
<%@ page import="java.sql.*" %>
<%@ page import="com.google.appengine.api.utils.SystemProperty" %>

<!--<b><%= request.getParameter("id") %></b>-->

<%
String url = null;
Connection conn=null;
if (SystemProperty.environment.value() ==
    SystemProperty.Environment.Value.Production) {
  // Load the class that provides the new "jdbc:google:mysql://" prefix.
  Class.forName("com.mysql.jdbc.GoogleDriver");
  url = "jdbc:google:mysql://ounake-app:oun/oun?user=root";
  conn = DriverManager.getConnection(url);
} else {
  // Local MySQL instance to use during development.
  Class.forName("com.mysql.jdbc.Driver");
  url = "jdbc:mysql://127.0.0.1:3306/oun";
  conn = DriverManager.getConnection(url,
    "root", "yourpass");
 
}
String bkid = request.getParameter("id");
String laeRaamat = "select * from recipes where bookID = "+bkid;
PreparedStatement stmt= conn.prepareStatement(laeRaamat);
//stmt.setString(1,request.getParameter("id"));

ResultSet rs = stmt.executeQuery(laeRaamat);
%>

<%
while (rs.next()) {
    String recipe = rs.getString("recipeName");
    
   
 %>
<p><%=recipe%></p>

				
<%
}
conn.close();
%>

