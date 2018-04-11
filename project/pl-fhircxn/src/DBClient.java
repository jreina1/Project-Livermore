import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.ResultSet;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

public class DBClient {

	private Connection conn = null;
	
	public DBClient() {
		
		Properties prop = new Properties();
		InputStream input = null;
		
		try {
			
//			System.out.println(System.getProperty("user.dir"));
			
			/*
			 * Note that I did something weird with the properties file.
			 * -- There is a copy that sits in the src directory.  This version is 
			 *    copied to the bin directory.  Stuff in the bin directory goes 
			 *    into the container. 
			 * -- There is another copy that sits at the top level pl-fhircxn/FHIRConnector 
			 *    directory.  This is where DBClient thinks it (DBClient) is so it will look there
			 *    for the properties file (in the theoretically same directory the DBClient is in)
			 *    So when you update src/config.properties, be sure to update it at the top
			 *    level directory too.
			 *    I did it this way so when the files are in the container, the jar will just look
			 *    in the current directory for the properties file.
			 */
			input = new FileInputStream("config.properties");
			prop.load(input);
			String host = prop.getProperty("mysql.host");
			String port = prop.getProperty("mysql.port");
			String dbCxn = "jdbc:mysql://" + host + ":" + port + "/livermore?" +
                    "user=iwant&password=moreLiverPlease";
			
			// Run locally in Eclipse
		    conn = DriverManager.getConnection(dbCxn);


		} catch (SQLException ex) {
		    // handle any errors
		    System.out.println("SQLException: " + ex.getMessage());
		    System.out.println("SQLState: " + ex.getSQLState());
		    System.out.println("VendorError: " + ex.getErrorCode());
		} catch (IOException ex) {
			// in case the properties file has issues
			ex.printStackTrace();
		} finally {
			if (input != null) {
				try {
					input.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}

	}
	
	//
	// https://dev.mysql.com/doc/connector-j/5.1/en/connector-j-usagenotes-statements.html
	//
	public void getPatients() {
		Statement stmt = null;
		ResultSet rs = null;

		try {
		    stmt = conn.createStatement();
		    rs = stmt.executeQuery("SELECT * FROM Patient");

		    // Now do something with the ResultSet ....
		    while (rs.next()) {
		    	System.out.println(rs.getString(2));
		    }
		}
		catch (SQLException ex){
		    // handle any errors
		    System.out.println("SQLException: " + ex.getMessage());
		    System.out.println("SQLState: " + ex.getSQLState());
		    System.out.println("VendorError: " + ex.getErrorCode());
		}
		finally {
		    // it is a good idea to release
		    // resources in a finally{} block
		    // in reverse-order of their creation
		    // if they are no-longer needed

		    if (rs != null) {
		        try {
		            rs.close();
		        } catch (SQLException sqlEx) { } // ignore

		        rs = null;
		    }

		    if (stmt != null) {
		        try {
		            stmt.close();
		        } catch (SQLException sqlEx) { } // ignore

		        stmt = null;
		    }
		}		
	}
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		DBClient db = new DBClient();
		db.getPatients();
		
	}
	
	public void insertPatients(List<PatientLiverMore> patientList) {
		Statement stmt = null;
		ResultSet rs = null;
		
		List<String> statements = new ArrayList<String>();
		//int count=0;
		for (PatientLiverMore p: patientList) {
			String statement = "INSERT INTO Patient "
					+ "(Patient_id,Patient_first_name,"
					+ "Patient_last_name,"
					+ "Patient_snomed_code,"
					+ "Patient_symptoms,"
					+ "Patient_treatment)"
					+ "values ("+
					"'"+p.getPatient_id()+"',"+
					"'"+p.getPatient_first_name()+"',"+
					"'"+p.getPatient_last_name()+"',"+
					"'"+p.getPatient_snomed_code()+"',"+
					"'"+p.getPatient_symptoms()+"',"+
					"'"+p.getPatient_treatment()+"'"
					+")";
			statements.add(statement);

			
		}
		try {
			for (String s : statements) {
				
				stmt = conn.createStatement();
			    //rs = stmt.executeQuery(s);
				stmt.executeUpdate(s);
			}
		    

		    // Now do something with the ResultSet ....
		    //while (rs.next()) {
		    	//System.out.println(rs.getString(2));
		    //}
		}
		catch (SQLException ex){
		    // handle any errors
		    System.out.println("SQLException: " + ex.getMessage());
		    System.out.println("SQLState: " + ex.getSQLState());
		    System.out.println("VendorError: " + ex.getErrorCode());
		}
		finally {
			System.out.println("Query Executed");
		    // it is a good idea to release
		    // resources in a finally{} block
		    // in reverse-order of their creation
		    // if they are no-longer needed

		    if (rs != null) {
		        try {
		            rs.close();
		        } catch (SQLException sqlEx) { } // ignore

		        rs = null;
		    }

		    if (stmt != null) {
		        try {
		            stmt.close();
		        } catch (SQLException sqlEx) { } // ignore

		        stmt = null;
		    }
		}		
		
		
	}

}
