describe('Teste de Segurança', () => {  
  it('Deve bloquear SQL Injection no campo Nome', () => {  
    cy.visit('/cadastro-paciente.html');  
    cy.get('#nome').type("Maria'; DROP TABLE pacientes; --");  
    cy.get('#btn-salvar').click();  
    cy.get('#mensagem').should('contain', 'Caractere inválido detectado');  
  });  
});