package br.inf.ids.treina1.api.pessoa;

import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.eclipse.microprofile.openapi.annotations.tags.Tag;

@Tag(name = "Pessoa")
@Path("/pessoa")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class PessoaResource {
	
	@Inject
	PessoaService pessoaService;

	@POST
	public Long post(Pessoa pessoa) {
		return pessoaService.gravar(pessoa);
	}
	
	@GET
	@Path("/todas")
	public List<Pessoa> getTodas() {
		return pessoaService.todas();
	}
	
}
