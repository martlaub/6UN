package oun;

import java.io.*;
import java.sql.*;

import javax.servlet.http.*;

import com.google.appengine.api.utils.SystemProperty;

public class ounServlet extends HttpServlet {
	@Override
	public void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws IOException {
		String url = null;
		Connection conn = null;
		try {
			if (SystemProperty.environment.value() == SystemProperty.Environment.Value.Production) {
				// Load the class that provides the new "jdbc:google:mysql://"
				// prefix.
				Class.forName("com.mysql.jdbc.GoogleDriver");
				url = "jdbc:google:mysql://ounake-app:oun/oun?user=root";
				conn = DriverManager.getConnection(url);
			} else {
				// Local MySQL instance to use during development.
				Class.forName("com.mysql.jdbc.Driver");
				url = "jdbc:mysql://127.0.0.1:3306/oun";
				conn = DriverManager.getConnection(url, "root", "yourpass");
			}

		} catch (Exception e) {
			e.printStackTrace();
			return;
		}

		PrintWriter out = resp.getWriter();
		try {
			try {
				String name = req.getParameter("name");
				String author = req.getParameter("author");
				if (name == "" || author == "") {
					out.println("<html><head></head><body>Autor või nimi on puudu, proovi uuesti!</body></html>");
				} else {
					String statement = "INSERT INTO requests (name, author) VALUES( ? , ? )";
					PreparedStatement stmt = conn.prepareStatement(statement);
					stmt.setString(1, name);
					stmt.setString(2, author);
					int success = 2;
					success = stmt.executeUpdate();
					if (success == 1) {
						out.println("<html><head></head><body>Sinu soov on edastatud!</body></html>");
					} else if (success == 0) {
						out.println("<html><head></head><body>Viga! Proovi uuesti!</body></html>");
					}

				}
			} finally {
				conn.close();
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		resp.setHeader("Refresh", "3; url=/raamatud.jsp");

	}
}
