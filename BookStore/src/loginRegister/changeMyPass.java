
package loginRegister;

import database.DB_Conn;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import user.user;

public class changeMyPass extends HttpServlet {

	protected void processRequest(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.setContentType("text/html;charset=UTF-8");
		PrintWriter out = response.getWriter();
		try {
			/* TODO output your page here. You may use following sample code. */
			out.println("<html>");
			out.println("<head>");
			out.println("<title>Servlet changeMyPass</title>");
			out.println("</head>");
			out.println("<body>");
			out.println("<h1>Servlet changeMyPass at " + request.getContextPath() + "</h1>");
			out.println("</body>");
			out.println("</html>");
		} finally {
			out.close();
		}
	}

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		processRequest(request, response);
	}

	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		try {
			// processRequest(request, response);
			String email = request.getParameter("email");
			String pass = request.getParameter("pass");
			if (email == null) {
				HttpSession session = request.getSession();
				user User = (user) session.getAttribute("user");
				email = User.getUserEmail();
			}
			String changePassword = "UPDATE  " + "`Daffodil_BookStore`.`user` " + " SET  `pass` = SHA1( '" + pass
					+ "' ) " + "WHERE  `user`.`email` ='" + email + "';";

			DB_Conn con = new DB_Conn();
			Connection c = con.getConnection();
			Statement psmt = c.createStatement();

			int i = psmt.executeUpdate(changePassword);
			PrintWriter out = response.getWriter();
			if (i == 1) {
				out.println("Password Updated... Try to login now!!" + email + pass);
			}
			if (i == 0) {
				out.println("Password Not Updated... Try to login now!!" + email + pass);
			}
			response.sendRedirect(request.getContextPath() + "/userinfo.jsp");

		} catch (SQLException ex) {
			Logger.getLogger(changeMyPassword.class.getName()).log(Level.SEVERE, null, ex);
			PrintWriter out = response.getWriter();
			out.println("Eror in Process " + ex);
			response.sendError(404);
		} catch (ClassNotFoundException ex) {
			Logger.getLogger(changeMyPassword.class.getName()).log(Level.SEVERE, null, ex);
			PrintWriter out = response.getWriter();
			out.println("Eror in Process " + ex);
			response.sendError(404);
		}

	}

	@Override
	public String getServletInfo() {
		return "Short description";
	}// </editor-fold>
}
