package de.msg.rest;

import java.math.BigInteger;
import java.security.SecureRandom;
import java.sql.SQLException;
import java.util.Random;

import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.NotAuthorizedException;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import de.msg.users.Credentials;
import de.msg.users.CredentialsService;
import de.msg.users.UserNotFoundException;

@Path("/authentication")
public class AuthenticationEndpoint {

	private CredentialsService credentialsService = new CredentialsService();

	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
	public Response authenticateUser(@FormParam("username") String username, @FormParam("password") String password) {

		try {

			// Authenticate the user using the credentials provided
			authenticate(username, password);

			// Issue a token for the user
			String token = issueToken(username);

			// Return the token on the response
			return Response.ok(new Token(token)).build();

		} catch (Exception e) {
			return Response.status(Response.Status.FORBIDDEN).build();
		}
	}

	private void authenticate(String username, String password) {
		if (username == null || password == null) {
			throw new NotAuthorizedException(Response.status(Response.Status.FORBIDDEN).build());
		}
		try {
			Credentials expected = credentialsService.getCredentials(username);
			if (expected != null && username.equals(expected.getUsername())
					&& password.equals(expected.getPassword())) {
				return;

			}
		} catch (UserNotFoundException e) {
			throw new NotAuthorizedException(Response.status(Response.Status.FORBIDDEN).build());
		}
		throw new NotAuthorizedException(Response.status(Response.Status.FORBIDDEN).build());
	}

	private String issueToken(String username) {
		// Issue a token (can be a random String persisted to a database or a JWT token)
		// The issued token must be associated to a user
		// Return the issued token
		Random random = new SecureRandom();
		String token = new BigInteger(130, random).toString(32);

		credentialsService.saveToken(username, token);
		return token;
	}
}