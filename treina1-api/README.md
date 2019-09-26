# Java

- Instalar JDK do Java 8
    - Ubuntu: https://www.geofis.org/en/install/install-on-linux/install-openjdk-8-on-ubuntu-trusty/
    - Windows: https://www.oracle.com/technetwork/pt/java/javase/downloads/jdk8-downloads-2133151.html

# Maven

- Instalar Maven na versão 3.5.4+
    - Ubuntu: https://linuxize.com/post/how-to-install-apache-maven-on-ubuntu-18-04/
    - Windows: https://www.mkyong.com/maven/how-to-install-maven-in-windows/

# PostgreSQL

- Instalação (Preferencialmente a versão 10.10):
- Utilizar a porta 5432
- https://www.postgresql.org/download/linux/ubuntu/
- Instalar uma ferramenta de criação de sql, exemplos:
    - PGAdmin: https://www.pgadmin.org/download/
    - DBeaver: https://dbeaver.io/download/
- Pela ferramenta de SQL, executar os comandos:
```sql
CREATE DATABASE idstreina1;
CREATE USER idstreina WITH PASSWORD 'treina123';
ALTER USER idstreina WITH SUPERUSER;
```

# Fontes iniciais

Para baixar os fontes iniciais pode-se utilizar um download ou o GIT
- Download:
    - https://codeload.github.com/ordnaelmedeiros/ids-treina1/zip/master

- GIT
    - instalação: https://git-scm.com/download
    - git clone https://github.com/ordnaelmedeiros/ids-treina1

- Dentro da pasta `treina1-api` executar:
    - `mvn clean package` (Obs.: pode sair tomar um café)
    - `mvn compile quarkus:dev`
    - Acessar `http://localhost:8080/home`
    - deve aparecer algo:

```
IDS Treina 1
Hello World
```


