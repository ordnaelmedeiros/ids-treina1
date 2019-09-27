package br.inf.ids.treina1.api.municipio;

import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import org.eclipse.microprofile.openapi.annotations.parameters.Parameter;
import org.eclipse.microprofile.openapi.annotations.tags.Tag;

import com.ordnaelmedeiros.jpafluidselect.querybuilder.select.pagination.PaginationResult;

@Tag(name = "Município")
@Path("/municipio")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class MunicipioResource {
	
	@Inject
	MunicipioService municipioService;
	
	@Inject
	MunicipioPesquisa municipioPesquisa;
	
	@POST
	@Transactional
	public Long post(Municipio municipio) {
		return municipioService.gravar(municipio);
	}
	
	@GET
	@Path("/{id}")
	public Municipio get(@PathParam("id") Long id) {
		return municipioService.busca(id);
	}
	
	@GET
	@Path("/pesquisa/{pagina}/{valor}")
	public PaginationResult<Municipio> pesquisa(
			@QueryParam("pagina") Integer pagina,
			@Parameter(required = false, name = "valor") @QueryParam("valor") String valor) {
		return municipioPesquisa.executar(pagina, valor);
	}
	
}
