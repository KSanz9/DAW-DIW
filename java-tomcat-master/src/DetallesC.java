import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;

public class DetallesC extends HttpServlet {
    Integer cont1;
    Integer cont2;
    Integer cont3;

    public void doGet(HttpServletRequest peticion, HttpServletResponse respuesta) throws ServletException, IOException {
        
        HttpSession misesion;
        PrintWriter salida = respuesta.getWriter();

        misesion = peticion.getSession(true);

	salida.println("<!DOCTYPE html>");  // HTML 5
        salida.println("<html><head>");
        salida.println("<meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>");

	salida.println("<title> DETALLES </title></head>");

	salida.println("<link rel=\"stylesheet\" type=\"text/css\" href=\"//fonts.googleapis.com/css?family=Mate+SC\" />");
	salida.println("<link rel=\"stylesheet\" href=\""+peticion.getContextPath()+"/css/style.css\" type=\"text/css\">");
	
        salida.println("<body>");

	salida.println("<header>");
        salida.println("<h1> CARRITO </h1>");  // Prints "Hello, world!"
	salida.println("<a class=\"enlaceDetalles\" href=\"listado\"> Seguir Comprando </a>");
	salida.println("</header");

	salida.println("<main>");

	//salida.println("<h1> Figuras del Tablero </h1>");
	salida.println("<table>");

	// Construccion de la tabla
	try{
	    Class.forName("com.mysql.jdbc.Driver");
	    Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/manga", "tomcat", "tomcat");
            PreparedStatement pst = conn.prepareStatement("Select * from mangasActuales;");
	    ResultSet rs = pst.executeQuery();
	    
	    while(rs.next()){


		if(misesion.getAttribute(rs.getString(1)) != null){
		    int aux = (int)misesion.getAttribute(rs.getString(1));

		    salida.println("<tr>");

		salida.println("<td>");
		salida.println("<img class=\"figuras\" src=\""+peticion.getContextPath()+"/imgs/"+rs.getString(4)+"\">");
		salida.println("</td>");

		salida.println("<td>");
		salida.println("<h2> x " +aux +"</h2>");
		salida.println("</td>");
		salida.println("</tr>");
		//
		salida.println("<tr>");
		salida.println("<td>");
		salida.println("<h2> x " +aux +"</h2>");
		salida.println("</td>");
		salida.println("</tr>");
		}
	    }
	    
	    }catch(ClassNotFoundException | SQLException e){
	    salida.println(e.toString());
	    }

	salida.println("</table>");

	salida.println("</main>");
       
        /*NOTAS PARA EL PROGRAMADOR:
        La idea que el equipo de programadores ha pensado es:
        
        Con los submits del html coger los parametros y guardarlos en la sesion con setAtribute.
        misesion.setAttribute('nombreProducto',cantidadDeProducto).

        Así cuando el cliente compre el mismo producto más de una vez se incrementa la cantidad de ese
        producto que tenemos guardada en la sesión.
         
        Pero el equipo no tiene ni idea de como coger el precio de ese producto... 

        Esperamos ordenes del jefe de departamento, el señor cthulhu!!
        */
        if(misesion.isNew()==false){

            //salida.println(dato);

        }

        //salida.println(dato);

	salida.println("<div class=\"debug\"");
        salida.println(misesion.toString());
	salida.println("</div>");
	salida.println("<br/>");
	
	salida.println("<input type=\"button\" value=\"Confirmar Pedido\">");

	salida.println("<script src=\""+peticion.getContextPath()+"/js/gestion.js\"></script>");
	salida.println("</body></html>");        
    }
}
