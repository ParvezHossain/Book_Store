
package product;

import database.DB_Conn;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class addCategory extends HttpServlet {

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
			out.println("<title>Servlet addCategory</title>");
			out.println("</head>");
			out.println("<body>");
			out.println("<h1>Servlet addCategory at " + request.getContextPath() + "</h1>");
			out.println("</body>");
			out.println("</html>");
		} finally {
			out.close();
		}
	}

	// <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on
	// the + sign on the left to edit the code.">

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		processRequest(request, response);
	}

	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// processRequest(request, response);

		String categoryName = request.getParameter("categoryName");
		PrintWriter out = response.getWriter();
		String message = addCategory(categoryName);
		out.print(message);
	}

	private String addCategory(String categoryName) {
		String message;

		if (categoryName.equals("")) {
			// out.println("Please enter in All the Values");
			message = "Please enter in a Category Name";
		} else {
			try {
				// out.println("Done!!");
				Connection con;
				DB_Conn conn = new DB_Conn();
				con = conn.getConnection();
				String sqlInsertCompany = "INSERT INTO  `Daffodil_BookStore`.`category` (`category_id` ,`category_name`)VALUES (NULL ,  '"
						+ categoryName + "');";
				// "INSERT INTO `Daffodil_BookStore`.`product-company`
				// (`company-id` ,`company-name`)VALUES (NULL ,
				// '"+companyName+"');";
				// String sqlInsertProduct = "INSERT INTO
				// `Daffodil_BookStore`.`category` (`category_id`
				// ,`category_name`)VALUES (NULL , '"+companyName+"'); ";
				Statement st = con.createStatement();
				int rows = st.executeUpdate(sqlInsertCompany);

				if (rows != 1) {
					// out.println("Company not inserted");
					message = "category insertion failed.";
				} else {
					// out.println(companyName+" Company Inserted");
					message = categoryName + " category inserted";
				}
				st.close();
				con.close();
			} catch (SQLSyntaxErrorException ex) {
				message = ("Please provide names without quotes");
			} catch (SQLIntegrityConstraintViolationException ex) {
				// out.println("A comany name with the same name exists in your
				// database... Try being specific.");
				message = "A category name with the same name exists in your database... Try being specific.";
			} catch (SQLException ex) {
				// out.println("There was a problem in Connectiong DB <br/>
				// Exception has occoured "+ex);
				message = "There was a problem in Connectiong DB <br/> Exception has occoured " + ex;

			} catch (ClassNotFoundException ex) {
				// out.println("Application Cannot find the Class <br/>
				// Exception has occoured "+ex);
				message = "Application Cannot find the Class <br/> Exception has occoured " + ex;
			}
		}
		return message;
	}

	@Override
	public String getServletInfo() {
		return "Short description";
	}// </editor-fold>
}
