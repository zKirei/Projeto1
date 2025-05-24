describe('Testes de Segurança', () => {
  beforeEach(() => {
    // Preenche campos obrigatórios com valores VÁLIDOS antes de cada teste
    cy.visit('/cadastro-paciente.html');
    cy.get('#cpf').type('529.982.247-25');
    cy.get('#telefone').type('41999999999');
  });

  it('Deve bloquear SQL Injection no campo Nome', () => {  
    cy.get('#nome').type("Maria'; DROP TABLE pacientes; --");
    // Verifica se o sistema bloqueia caracteres maliciosos
    cy.get('#consentimento').check();
    cy.get('#btn-salvar').click();
    // Verifica mensagem de segurança
    cy.get('#mensagem')
      .should('contain', 'Caractere inválido detectado')
      .and('have.class', 'erro');
  });

  it('Deve bloquear XSS no campo Nome', () => {
    cy.get('#nome').type('<script>alert("XSS")</script>'); // Payload XSS
    cy.get('#consentimento').check();
    cy.get('#btn-salvar').click();
    
    cy.get('#mensagem')
      .should('contain', 'Caractere inválido detectado')
      .and('have.class', 'erro');
  });
});