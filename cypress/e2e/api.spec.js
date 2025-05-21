// cypress/e2e/api.spec.js

 it('Deve retornar 201 ao cadastrar paciente válido', () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:3000/pacientes',
      body: {
        nome: "Ana Silva",
        cpf: "12345678909",
        telefone: "41999999999"
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('mensagem', 'Cadastro realizado com sucesso!');
    });
  });