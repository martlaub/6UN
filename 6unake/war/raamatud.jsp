<%@ page contentType="text/html; charset=UTF-8" language="java" %>
<%@ page import="java.util.List" %>
<%@ page import="java.sql.*" %>
<%@ page import="com.google.appengine.api.utils.SystemProperty" %>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<meta name="Description" content="Information architecture, Web Design, Web Standards." />
<meta name="Keywords" content="your, keywords" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="Distribution" content="Global" />
<meta name="Robots" content="index,follow" />

<link rel="stylesheet" href="ounake.css" type="text/css" />

<script type="text/javascript" src="/JS/jquery-1.11.0.js"></script>
<script type="text/javascript" src="/JS/fb.js"></script>
<script type="text/javascript" src="/JS/effects.js"></script>


<title>6un.ee</title>
</head>
<body onload="picChanger()">

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
    "root", "YOURPASS");
}

ResultSet rs = conn.createStatement().executeQuery(
    "SELECT COUNT(*), books.bookID, books.bookName, books.author, books.pildiURL, books.ISBN FROM books INNER JOIN recipes ON books.bookID=recipes.bookID GROUP BY books.bookID, books.bookName, books.author, books.pildiURL, books.ISBN;");
    
//raamatute arv kokku

ResultSet rs4 = conn.createStatement().executeQuery(
    "SELECT COUNT(bookID) FROM books;");
    rs4.next();
    int booksNumber = rs4.getInt(1);
    
//retseptide arv kokku
ResultSet rs2 = conn.createStatement().executeQuery(
    "SELECT COUNT(recipeID) FROM recipes;");
    rs2.next();
    int resNumber = rs2.getInt(1);
    
%>


<div id="fb-root"></div>
<!-- header starts here --> 
<div id="header">
  <div id="header-content">
    <h1 id="logo-text"><a href="pealeht.html" title="" onmousemove="searchOver(this)" onmouseout="searchOut(this)">6un.ee</a></h1>
    <h2 id="slogan">Kokaraamat alati käepärast</h2>
    <img id="pic" src="images/kook.jpg" alt="" />
    <div id="header-links">
		<form action="" class="searchform">
          <p>
            <input name="search_query" onfocus="searchFocus(this)" onblur="loseFocus(this)" class="textbox" type="text" />
            <input name="search" onmousemove="searchOver(this)" onmouseout="searchOut(this)" class="button" value="Otsi" type="submit"  />
          </p>
        </form>
        <div class="fb-login-button" data-max-rows="1" data-size="medium" 
            data-show-faces="true" data-auto-logout-link="true"></div>
    </div>
  </div>
</div>
<!-- navigation starts here -->
<div id="nav-wrap">
  <div id="nav">
    <ul>
      <li><a href="pealeht.html">Pealeht</a></li>
      <li id="current"><a href="raamatud.jsp">Raamatud</a></li>
      <li><a href="meist.html">Meist</a></li>
      <li><a href="kontakt.html">Kontakt</a></li>
      <li id="peida"><a href="_unake.html">MINU RIIUL</a></li>
    </ul>
  </div>
</div>

<!-- navigation starts here  -->
<div id="content-wrap">
  <div id="content">
	<!-- Parem poolne kÃ¼lje riba -->
    <div id="sidebar" >
<div class="sep"></div>
<div class="sidebox">
        <h1>Statistika</h1>
        <ul class="sidemenu">
          <li><a>Raamatuid: <%= booksNumber %></a></li>
          <li><a>Retsepte: <%= resNumber %></a></li>
        </ul>
      </div>
    </div> 

	<!-- Main -->
    <div id="main">
      <div class="box">
		<div id="nav-wrapsub">	
		<div id="nav-sub">

			</div>
		</div>

<%
while (rs.next()) {
    String bookName = rs.getString("bookName");
    String author = rs.getString("author");
    String ISBN = rs.getString("ISBN");
    String pildiURL = rs.getString("pildiURL");
    int id = rs.getInt("bookID");
    int retsepte = rs.getInt(1);
 %>

<p><img src="<%= pildiURL %>" 
					alt="" class="raamat" onmousemove="bookOver(this)" onmouseout="bookOut(this)"/>

				<a href="index.html"><%= bookName %></a><br/>
				Autor: <%= author %><br/>
				ISBN: <%= ISBN %><br/>
				Retsepte: <%= retsepte %><br/>
				<br/>
				<input name="add" onclick="mUp(this)" class="button" value="Lisa minu riiulisse!" type="submit" />		


				<br/>
				<br/>

				</p>

				<br/>
				<br/>

<%
}
conn.close();
%>



			</div>

		</div>
    </div>

    <!-- content-wrap ends here -->
  </div>
<div/>
<!-- footer starts here-->
<div id="footer-wrap">
  <div id="footer-bottom">
    <p> &copy; 2014 <a>Kasutajad</a> | 
      <a href="valesti.html">Privaatsus</a> | 
      <a href="meist.html">Meist</a> | 
	  <a href="kontakt.html">Kontakt</a> | 
	  <a href="valesti.html">Facebook</a>&nbsp;|&nbsp; 
	  <a href="valesti.html">Twitter</a> </p>
  </div>
  <!-- footer ends-->
</div>
</body>
</html>