package br.inf.ids.treina1.core;

import java.util.List;

public class ConstraintViolationObj {

	private List<String> mensagens;
	
	public ConstraintViolationObj(List<String> mensagens) {
		this.mensagens = mensagens;
	}

	public List<String> getMensagens() {
		return mensagens;
	}
	public void setMensagens(List<String> mensagens) {
		this.mensagens = mensagens;
	}
	
}
