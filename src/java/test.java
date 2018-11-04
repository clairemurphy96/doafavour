import java.sql.Connection;
import java.sql.DriverManager;


public class test {
    
    public static void main(String[] args) {
        Connection conn = null;
        
        try{
            conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/doafavourdb", "root", "");
            if (conn != null)
                    {
                        System.out.println("connected to database");
                        
                    } 
        } catch (Exception e){
        System.out.println("Not connected");     
        }
       
        
            
        
    }
    
}
