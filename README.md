# Gympass
 
Gympass style app

## RFs (Requisitos funcionais)

- [x] deve ser possível se cadastrar;
- [x] deve ser possível se autenticar;
- [ ] deve ser possível obter o perfil de um usuário autenticado;
- [ ] deve ser possível obter o número de check-ins realizados pelo usuário autenticado;
- [ ] deve ser possível obter o usuário obter seu histórico de check-ins;
- [ ] deve ser possível o usuário buscar academias próximas;
- [ ] deve ser possivel o usuário buscar uma academias pelo nome;
- [ ] deve ser possivel o usuário realizar check-ins em uma academia;
- [ ] deve ser possível validar o check-in de um usuário;
- [ ] deve ser possível cadastrar uma academia

## RNs (Requisitos de Negócio)

- [x] O usuário não deve poder se cadastrar com um email duplicado;
- [ ] O usuário não pode fazer mais de um check-in no mesmo dia;
- [ ] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [ ] O check-in só pode ser validado até 20 minutos após criado;
- [ ] O check-in só pode ser validado por administradores;
- [ ] A academia só pode ser cadastrada por administradores;

## RNFs (Requisitos não funcionais)

- [x] A senha do usuário precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [ ] Todas as listas de dados precisam estar paginadas com 20 itens por página;
- [ ] O usuário deve ser identificado por um JWT(JSON Web Token);