
package orders;

import database.DB_Conn;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


public class changeProductStatus extends HttpServlet {


    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        try {
            /* TODO output your page here. You may use following sample code. */
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet changeProductStatus</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet changeProductStatus at " + request.getContextPath() + "</h1>");
            out.println("</body>");
            out.println("</html>");
        } finally {            
            out.close();
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        doPost(request, response);
    }


    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        //processRequest(request, response);
        String ChangeStatus = request.getParameter ("ChangeStatus");
        String order [] = request.getParameterValues("order");
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        out.println ("So you wanna "+ChangeStatus+" For the Item nos of, ");
        
        if (order !=  null){
            for (int i=0; i<order.length; i++){
                out.println (" <br/>"+order[i]);
            }
            
            if (ChangeStatus.equals("approved")){
                try {
                    //Approve the pending oreders
                    /*
        UPDATE  `order` SET 
    `status` =  'approved' WHERE  `order`.`order_id` =16 */
                    StringBuffer sqlBuffer = new StringBuffer();
                    
                    
                    Connection c = new DB_Conn().getConnection();
                    Statement st = c.createStatement();
                    for (int i=0; i<order.length; i++){
                    String sqlUpdatePending = "UPDATE  `order` SET " +
    " `status` =  'approved' WHERE  `order`.`order_id` ='"+order[i]+"' ; ";
                        //sqlBuffer.append(sqlUpdatePending);
                        st.addBatch(sqlUpdatePending);
                    }
                    
                    out.print(" "+sqlBuffer.toString());
                    int[] executeBatch = st.executeBatch();
                    out.println (executeBatch.length +" Products Approved");
                    
                    
                } catch (SQLException ex) {
                    out.print(" " +ex);
                    Logger.getLogger(changeProductStatus.class.getName()).log(Level.SEVERE, null, ex);
                } catch (ClassNotFoundException ex) {
                    out.print(" " +ex);
                    Logger.getLogger(changeProductStatus.class.getName()).log(Level.SEVERE, null, ex);
                }
                
                
                response.sendRedirect(request.getContextPath()+"/admin_pendingOrders.jsp");
                
            }else if (ChangeStatus.equals("delivered")){
                //cancel the pending oreders
                try {
                    //Approve the pending oreders
                    /*
        UPDATE  `order` SET 
    `status` =  'approved' WHERE  `order`.`order_id` =16 */
                    StringBuffer sqlBuffer = new StringBuffer();
                    
                    
                    Connection c = new DB_Conn().getConnection();
                    Statement st = c.createStatement();
                    for (int i=0; i<order.length; i++){
                    String sqlUpdatePending = "UPDATE  `order` SET " +
    " `status` =  'delivered' WHERE  `order`.`order_id` ='"+order[i]+"' ; ";
                        //sqlBuffer.append(sqlUpdatePending);
                        st.addBatch(sqlUpdatePending);
                    }
                    
                    out.print(" "+sqlBuffer.toString());
                    int[] executeBatch = st.executeBatch();
                    out.println (executeBatch.length +" Products Approved");
                    
                    
                } catch (SQLException ex) {
                    out.print(" " +ex);
                    Logger.getLogger(changeProductStatus.class.getName()).log(Level.SEVERE, null, ex);
                } catch (ClassNotFoundException ex) {
                    out.print(" " +ex);
                    Logger.getLogger(changeProductStatus.class.getName()).log(Level.SEVERE, null, ex);
                }
                
                response.sendRedirect("/saikiranBookstoreApp/admin_approvedOrders.jsp");
            }
            else if (ChangeStatus.equals("cancel")){
                //cancel the pending oreders
                
                try {
                    //Approve the pending oreders
                    /*
        UPDATE  `order` SET 
    `status` =  'approved' WHERE  `order`.`order_id` =16 */
                    StringBuffer sqlBuffer = new StringBuffer();
                    
                    Connection c = new DB_Conn().getConnection();
                    Statement st = c.createStatement();
                    for (int i=0; i<order.length; i++){
                    
                    String sqlDeleteOrder, sqlDeleteSales;
                    sqlDeleteOrder = " DELETE FROM `order` WHERE `order_id` = "+order[i]+";";
                    sqlDeleteSales = " DELETE FROM `sales` WHERE `order_id` = "+order[i]+";";
                    
                    st.addBatch(sqlDeleteOrder);
                    st.addBatch(sqlDeleteSales);
                    }
                    
                    out.print(" "+sqlBuffer.toString());
                    int[] executeBatch = st.executeBatch();
                    out.println (executeBatch.length +" Products Deleted");
                    
                    
                } catch (SQLException ex) {
                    out.print(" " +ex);
                    
                    Logger.getLogger(changeProductStatus.class.getName()).log(Level.SEVERE, null, ex);
                } catch (ClassNotFoundException ex) {
                    out.print(" " +ex);
                    Logger.getLogger(changeProductStatus.class.getName()).log(Level.SEVERE, null, ex);
                }
                
                response.sendRedirect("/saikiranBookstoreApp/admin_Performance.jsp");
            
            }
       }
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>
}
