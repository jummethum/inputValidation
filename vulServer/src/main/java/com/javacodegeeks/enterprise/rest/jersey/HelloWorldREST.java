package com.javacodegeeks.enterprise.rest.jersey;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Response;

@Path("/vul")
public class HelloWorldREST {
	
	@GET
	@Path("/search")
	public Response search(
			@QueryParam("searchString")
//		    @NotNull
//		    @Size(min = 1, max = 255)
//		    @Pattern(regexp = "\\d+")
			String term) {
		
		String output = term + " not found. Please try a differnt search word.";
		return Response.status(200).entity(output).build();

	}
}
