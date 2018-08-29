package de.msg.users;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class CredentialsService {

	static final String JDBC_DRIVER = "org.h2.Driver";
	private static final String DB_URL = "jdbc:h2:~/test";

	private static final String USER_NAME = "admin";
	private static final String PASSWORD = "admin";

	public void saveToken(String username, String token) {
		Connection datasource = this.getConnection();
		Statement stmt;
		try {
			stmt = datasource.createStatement();
			String sql = "MERGE INTO TOKENS VALUES('" + username + "', '" + token + "');";
			stmt.executeUpdate(sql);
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			this.closeConnection(datasource);
		}
		this.closeConnection(datasource);
	}

	public Credentials getCredentials(String username) throws UserNotFoundException {
		Connection datasource = this.getConnection();
		Statement stmt;
		Credentials credentials = null;
		try {
			stmt = datasource.createStatement();
			String sql = "SELECT * FROM CREDENTIALS WHERE username='" + username + "';";
			ResultSet rs = stmt.executeQuery(sql);
			if (rs.next()) {
				String user = rs.getString("username");
				String password = rs.getString("password");
				credentials = new Credentials(user, password);
			} else {
				throw new UserNotFoundException("User with user name : " + username + "not found");
			}

		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			this.closeConnection(datasource);
		}
		this.closeConnection(datasource);
		return credentials;
	}

	public boolean isTokenValid(String token) {
		Connection datasource = this.getConnection();
		Statement stmt;
		boolean isValid = false;
		try {
			stmt = datasource.createStatement();
			String sql = "SELECT * FROM TOKENS WHERE tokenstring='" + token + "';";
			ResultSet rs = stmt.executeQuery(sql);
			if (rs.next()) {
				isValid = true;
			}

		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			this.closeConnection(datasource);
		}
		this.closeConnection(datasource);
		return isValid;
	}

	private Connection getConnection() {
		Connection conn = null;
		try {
			// STEP 1: Register JDBC driver
			Class.forName(JDBC_DRIVER);

			// STEP 2: Open a connection
			conn = DriverManager.getConnection(DB_URL, USER_NAME, PASSWORD);
		} catch (SQLException se) {
			// Handle errors for JDBC
			se.printStackTrace();
		} catch (ClassNotFoundException e) {
			// Handle errors for Class.forName
			e.printStackTrace();
		}
		return conn;
	}

	private void closeConnection(Connection conn) {
		try {
			conn.close();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
