package de.msg.rest;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.Response;

@Path("/evil")
public class MalloryREST {

	@GET
	@Path("authstealer")
	public Response getAllEmployees(@Context HttpHeaders headers) {
		System.out.println("Dr. Evil is here");
		String token = "";
		List<String> authHeaders = headers.getRequestHeader(HttpHeaders.AUTHORIZATION);
		if (authHeaders != null && !authHeaders.isEmpty()) {
			token = authHeaders.get(0);
			System.out.println(token);
		}
		return Response.status(200).entity(token).build();
	}
}
