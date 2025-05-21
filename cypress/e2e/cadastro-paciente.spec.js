 
it('Deve cadastrar paciente com dados válidos', () => {  
  cy.visit('/cadastro-paciente.html'); 
  cy.get('#nome').type('João da Silva');  
  cy.get('#cpf').type('529.982.247-25');  
  cy.get('#telefone').type('41999999999');  
  cy.get('#btn-salvar').click();
  cy.get('#mensagem', { timeout: 3000 }).should('be.visible');
  cy.get('#mensagem').should('contain', 'Cadastro realizado com sucesso');
});  

it('Deve bloquear CPF inválido', () => {  
  cy.visit('/cadastro-paciente.html');  
  cy.get('#nome').type('Maria Silva'); // Nome válido
  cy.get('#cpf').type('111.222.333-44'); // CPF inválido  
  cy.get('#btn-salvar').click();  
  cy.contains('CPF inválido!', { timeout: 3000 }).should('be.visible'); // Com "!"
});

it('Deve bloquear telefone inválido', () => {
  cy.visit('/cadastro-paciente.html');
  cy.get('#nome').type('João da Silva'); // Nome válido
  cy.get('#cpf').type('529.982.247-25'); // CPF válido
  cy.get('#telefone').type('41'); // Telefone inválido
  cy.get('#btn-salvar').click();
  cy.contains('Telefone inválido!', { timeout: 3000 }).should('be.visible');
});

it('Deve bloquear cadastro sem nome', () => {
  cy.visit('/cadastro-paciente.html');
  cy.get('#cpf').type('529.982.247-25');
  cy.get('#telefone').type('41999999999');
  cy.get('#btn-salvar').click();
  cy.contains('Campo nome é obrigatório!', { timeout: 3000 }).should('be.visible');
});

it('Deve formatar automaticamente o CPF', () => {
  cy.visit('/cadastro-paciente.html');
  cy.get('#cpf').type('52998224725');
  cy.get('#cpf').should('have.value', '529.982.247-25');
});

it('Deve ter labels acessíveis', () => {
  cy.visit('/cadastro-paciente.html');
  cy.get('label[for="nome"]').should('contain', 'Nome completo*');
  cy.get('input#nome').should('have.attr', 'aria-label', 'Campo obrigatório para nome completo');
  cy.reload(); 
});