describe('Teste de Segurança', () => {  
  it('Deve bloquear SQL Injection no campo Nome', () => {  
    cy.visit('/cadastro-paciente');  
    cy.get('#nome').type("Maria'; DROP TABLE pacientes; --");  
    cy.get('#btn-cadastrar').click();  
    cy.contains('Caractere inválido detectado').should('be.visible');  
  });  
});  