CREATE SEQUENCE SEQ_PESSOA;
CREATE TABLE PESSOA (
	PESSOAID NUMERIC(20) NOT NULL,
	NOME VARCHAR(300),
	CPF VARCHAR(11),
	NASCIMENTO DATE,
	SEXO VARCHAR(20),
	CONSTRAINT PK_USUARIO PRIMARY KEY (PESSOAID)
);