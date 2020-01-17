import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;
import java.util.stream.Collectors;
import org.json.JSONObject;
import org.json.JSONException;

public class APIGestionC extends HttpServlet {
    Integer cont1;
    Integer cont2;
    Integer cont3;

    public void doPost(HttpServletRequest peticion, HttpServletResponse respuesta) throws ServletException, IOException{
        
        HttpSession misesion;

	respuesta.setContentType("application/json");
        PrintWriter salida = respuesta.getWriter();

        misesion = peticion.getSession(true);

	String requestData = peticion.getReader().lines().collect(Collectors.joining());

	log("RequestData : "+requestData);

	try{
	    JSONObject jObject = new JSONObject(requestData);
	    
	    String idfigura = jObject.getString("idfigura");

	    log(" --> idfigura : "+idfigura);

	    if(misesion.getAttribute(idfigura) == null){
		misesion.setAttribute(idfigura,1);
	    }else{
		misesion.setAttribute(idfigura,(int)misesion.getAttribute(idfigura)+1);
	    }

	    log(misesion.getAttribute(idfigura).toString());
	    
	    
	}catch(JSONException e){
	    log(e.toString());
	}
	    

	
	salida.print(requestData);
	
	
	salida.flush();
	salida.close();
    }

    public void doGet(HttpServletRequest peticion, HttpServletResponse respuesta) throws ServletException, IOException{
	doPost(peticion,respuesta);
    }
}
