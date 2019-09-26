package br.inf.ids.treina1.api.pessoa;

import java.util.List;
import java.util.Set;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;
import javax.validation.Validator;

import com.ordnaelmedeiros.jpafluidselect.querybuilder.QueryBuilder;

import br.inf.ids.treina1.api.pessoa.validacao.PessoaValidaCPFDuplicado;

@RequestScoped
public class PessoaService {
	
	@Inject
	EntityManager em;
	
	@Inject
	Validator validator;
	
	@Inject
	PessoaValidaCPFDuplicado cpfDuplicado;
	
	private void validar(Pessoa pessoa) {
		Set<ConstraintViolation<Pessoa>> validate = validator.validate(pessoa);
		if (!validate.isEmpty()) {
			throw new ConstraintViolationException(validate);
		}
		cpfDuplicado.executa(pessoa);
	}
	
	public List<Pessoa> todas() {
		return new QueryBuilder(em)
			.select(Pessoa.class)
			.getResultList();
	}
	
	@Transactional
	public Long gravar(Pessoa pessoa) {
		this.validar(pessoa);
		em.persist(pessoa);
		return pessoa.getId();
	}

	public Pessoa busca(Long id) {
		return em.find(Pessoa.class, id);
	}

	@Transactional
	public void atualizar(Pessoa pessoa) {
		this.validar(pessoa);
		em.merge(pessoa);
	}
	
	@Transactional
	public void remover(Long id) {
		em.remove(busca(id));
	}
	
}
