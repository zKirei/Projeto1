it('Deve bloquear SQL Injection no campo Nome', () => {  
  cy.visit('/cadastro-paciente.html');  
  cy.get('#nome').type("Maria'; DROP TABLE pacientes; --");  
  cy.get('#btn-salvar').click();  
  cy.get('#mensagem').should('contain', 'Caractere inválido detectado');  
});  

it('Deve bloquear XSS no campo Nome', () => {
  cy.visit('/cadastro-paciente.html');
  cy.get('#nome').type('<script>alert("XSS")</script>');
  cy.get('#btn-salvar').click();
  cy.get('#mensagem').should('contain', 'Caractere inválido detectado');
});