import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;
import java.util.stream.Collectors;
import org.json.JSONObject;
import org.json.JSONException;

public class APIGestionCuentaC extends HttpServlet {
    Integer cont1;
    Integer cont2;
    Integer cont3;

    public void doGet(HttpServletRequest peticion, HttpServletResponse respuesta) throws ServletException, IOException{
        
        HttpSession misesion;

	respuesta.setContentType("application/json");
        PrintWriter salida = respuesta.getWriter();

        misesion = peticion.getSession(true);


	int totalElementos=0;

	try{
	    Class.forName("com.mysql.jdbc.Driver");
	    Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/ajedrez", "tomcat", "tomcat");
            PreparedStatement pst = conn.prepareStatement("Select _idfigura from figuras;");
	    ResultSet rs = pst.executeQuery();
	    
	    while(rs.next()){
	
		
      	if(misesion.getAttribute(rs.getString(1)) != null){
		    totalElementos=totalElementos+(int)misesion.getAttribute(rs.getString(1));
	}
	    }
	 
	}catch(ClassNotFoundException | SQLException e){
	    log(e.toString());
	    salida.println(e.toString());
	}  

	log("LOG : totalElementos " +totalElementos);
	
	salida.print("{ \"totalElementos\":"+totalElementos+"}");
	
	
	salida.flush();
	salida.close();
    }

    /*
    public void doGet(HttpServletRequest peticion, HttpServletResponse respuesta) throws ServletException, IOException{
	doPost(peticion,respuesta);
	}*/
}
