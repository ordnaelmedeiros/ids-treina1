package br.inf.ids.treina1.api.pessoa;

import java.util.List;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.persistence.EntityManager;

import com.ordnaelmedeiros.jpafluidselect.querybuilder.QueryBuilder;

@RequestScoped
public class PessoaService {
	
	@Inject
	EntityManager em;
	
	public List<Pessoa> todas() {
		return new QueryBuilder(em)
			.select(Pessoa.class)
			.getResultList();
	}
	
	public Long gravar(Pessoa pessoa) {
		em.persist(pessoa);
		return pessoa.getId();
	}
	
}
