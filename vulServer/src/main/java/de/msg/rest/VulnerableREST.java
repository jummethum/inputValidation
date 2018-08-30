package de.msg.rest;

import java.util.ArrayList;

import javax.annotation.security.PermitAll;
import javax.annotation.security.RolesAllowed;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/vul")
public class VulnerableREST {

	@GET
	public String message() {
		return "Hello, rest!";
	}

	@GET
	@Path("search")
	@Produces(MediaType.TEXT_HTML)
	public Response search(@QueryParam("searchString") String term) {

		String output = term + " not found. Please try a differnt search word.";
		return Response.status(200).entity(output).build();

	}

	@Secured
	@GET
	@Path("employees")
	@Produces(MediaType.APPLICATION_JSON)
	public ArrayList<Employee> getAllEmployees() {
		ArrayList<Employee> list = new ArrayList<Employee>();

		list.add(new Employee("Lokesh Gupta", 32, "005"));
		list.add(new Employee("Alex Kolenchiskey", 55, "003"));
		list.add(new Employee("David Kameron", 77, "009"));
		return list;
	}

}
