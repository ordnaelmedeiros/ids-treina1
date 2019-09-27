package br.inf.ids.treina1.api.municipio;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.validation.constraints.Size;

@Entity
@SequenceGenerator(name = "SEQ_MUNICIPIO", sequenceName = "SEQ_MUNICIPIO", allocationSize = 1)
public class Municipio {

	@Id
	@Column(name = "MUNICIPIOID")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_MUNICIPIO")
	private Long id;
	
	@Size(max = 300)
	private String nome;
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}
	
}
