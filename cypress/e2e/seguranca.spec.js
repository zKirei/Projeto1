// cypress/e2e/seguranca.spec.js
describe('Testes de Segurança', () => {
  beforeEach(() => {
    // Preenche campos obrigatórios com valores VÁLIDOS antes de cada teste
    cy.visit('/cadastro-paciente.html');
    cy.get('#cpf').type('529.982.247-25'); // CPF válido
    cy.get('#telefone').type('41999999999'); // Telefone válido
  });

  it('Deve bloquear SQL Injection no campo Nome', () => {  
    cy.get('#nome').type("Maria'; DROP TABLE pacientes; --"); // Payload malicioso
    cy.get('#btn-salvar').click();
    
    // Verifica mensagem de segurança
    cy.get('#mensagem')
      .should('contain', 'Caractere inválido detectado')
      .and('have.class', 'erro');
  });

  it('Deve bloquear XSS no campo Nome', () => {
    cy.get('#nome').type('<script>alert("XSS")</script>'); // Payload XSS
    cy.get('#btn-salvar').click();
    
    cy.get('#mensagem')
      .should('contain', 'Caractere inválido detectado')
      .and('have.class', 'erro');
  });
});