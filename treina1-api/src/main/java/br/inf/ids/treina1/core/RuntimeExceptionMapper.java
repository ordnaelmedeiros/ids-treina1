package br.inf.ids.treina1.core;

import java.util.Arrays;

import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;

@Provider
public class RuntimeExceptionMapper implements ExceptionMapper<RuntimeException> {

	@Override
	public Response toResponse(RuntimeException exception) {
		
		return Response
				.status(Status.BAD_REQUEST)
				.entity(new ExceptionMessage(Arrays.asList(exception.getMessage())))
				.build();
		
	}

}
