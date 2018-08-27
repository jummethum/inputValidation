package de.msg.inputValidation;

import javax.ws.rs.ApplicationPath;

import org.glassfish.jersey.server.ResourceConfig;
import org.glassfish.jersey.server.ServerProperties;

@ApplicationPath("inputValidation")
public class ApplicationREST extends ResourceConfig{
	
	public ApplicationREST() {
		property(ServerProperties.BV_SEND_ERROR_IN_RESPONSE, true);
        packages("de.msg.inputValidation");
    }
}
