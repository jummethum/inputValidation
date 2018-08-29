package de.msg.rest;

import javax.ws.rs.ApplicationPath;

import org.glassfish.jersey.jackson.JacksonFeature;
import org.glassfish.jersey.server.ResourceConfig;
import org.glassfish.jersey.server.ServerProperties;

@ApplicationPath("rest")
public class ApplicationREST extends ResourceConfig{
	
	public ApplicationREST() {
		property(ServerProperties.BV_SEND_ERROR_IN_RESPONSE, true);
        packages("de.msg.rest");
        register(JacksonFeature.class);
//        register(AuthenticationFilter.class);
    }
}
