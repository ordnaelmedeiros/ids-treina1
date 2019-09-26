package br.inf.ids.treina1.core;

import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.inject.Produces;
import javax.inject.Singleton;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.hibernate5.Hibernate5Module;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;

@ApplicationScoped
public class CustomObjectMapperConfig {

	@Singleton
	@Produces
	public ObjectMapper objectMapper() {
		
		ObjectMapper objectMapper = new ObjectMapper();
		// perform configuration
		
		objectMapper.registerModule(new JavaTimeModule());
		objectMapper.registerModule(new Hibernate5Module());
		objectMapper.configure(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS, false);
		
		return objectMapper;
		
	}
}
