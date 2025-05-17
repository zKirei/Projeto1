describe('Cadastro de Paciente', () => {  
  it('Deve cadastrar paciente com dados válidos', () => {  
    cy.visit('/cadastro-paciente'); 
    cy.get('#nome').type('João da Silva');  
    cy.get('#cpf').type('123.456.789-09');  
    cy.get('#telefone').type('(41) 99999-9999');  
    cy.get('#btn-salvar').click();  
    cy.contains('Cadastro realizado com sucesso').should('be.visible');  
  });  

  it('Deve bloquear CPF inválido', () => {  
    cy.visitcy.visit('/cadastro-paciente');  
    cy.get('#cpf').type('111.222.333-44'); // CPF inválido  
    cy.get('#btn-salvar').click();  
    cy.contains('CPF inválido').should('be.visible');  
  });  
});  