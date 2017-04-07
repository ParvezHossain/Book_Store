
package product;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.sql.*;
import database.*;

public class addCompany extends HttpServlet {

	protected void processRequest(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.setContentType("text/html;charset=UTF-8");
		PrintWriter out = response.getWriter();
		try {
			/*
			 * TODO output your page here. You may use following sample code.
			 */
			out.println("<html>");
			out.println("<head>");
			out.println("<title>Servlet addCompany</title>");
			out.println("</head>");
			out.println("<body>");
			out.println("<h1>Servlet addCompany at " + request.getContextPath() + "</h1>");
			out.println("</body>");
			out.println("</html>");
		} finally {
			out.close();
		}
	}

	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// processRequest(request, response);
		String companyName = request.getParameter("companyName");
		// String productName = request.getParameter("productName");
		PrintWriter out = response.getWriter();
		// out.print(companyName +" "+productName);
		if (companyName.equals("")) {
			out.println("Please enter in All the Values");
		} else {
			try {
				// out.println("Done!!");
				Connection con;
				DB_Conn conn = new DB_Conn();
				con = conn.getConnection();
				String sqlInsertCompany = "INSERT INTO  `Daffodil_BookStore`.`product-company` (`company-id` ,`company-name`)VALUES (NULL ,  '"
						+ companyName + "');";
				// String sqlInsertProduct = "INSERT INTO `Daffodil
				// _BookStore`.`category` (`category_id`
				// ,`category_name`)VALUES (NULL , '"+companyName+"'); ";
				Statement st = con.createStatement();
				int rows = st.executeUpdate(sqlInsertCompany);

				if (rows != 1) {
					out.println("Company not inserted");
				} else {
					out.println(companyName + " Product Company Inserted");
				}
				st.close();
				con.close();

			}

			catch (SQLSyntaxErrorException ex) {
				out.println("Please provide names without quotes");
			} catch (SQLIntegrityConstraintViolationException ex) {
				out.println("Company With the same name exists...");
			}

			catch (SQLException ex) {
				out.println("There was a problem in Connectiong DB <br/> Exception has occoured " + ex);
			} catch (ClassNotFoundException ex) {
				out.println("Application Cannot find the Class <br/> Exception has occoured " + ex);
			}
		}

	}

	@Override
	public String getServletInfo() {
		return "Short description";
	}// </editor-fold>
}
