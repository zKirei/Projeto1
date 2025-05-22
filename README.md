# SGHSS - Sistema de Gestão Hospitalar e de Serviços de Saúde

Projeto de Qualidade de Software para fins educacionais, com foco em testes funcionais, de segurança e desempenho.

## 🚀 Como Executar

### Pré-requisitos
- Node.js
- Java(para JMeter)
- JMeter

### Instalação
```bash
npm install
```

### Comandos Úteis
| Comando                | Descrição                                  |
|------------------------|-------------------------------------------|
| `npm start`            | Inicia o servidor           |
| `npm test`             | Abre o Cypress para execução de testes    |
| `npm run test:ci`      | Executa testes do Cypress em modo headless|
| `npm run load-test`    | Roda teste de carga com JMeter            |

## 📂 Estrutura do Projeto
```
zKirei-SGHSS/
├── cypress/               # Testes E2E com Cypress
├── jmeter-plans/          # Planos de teste de carga
├── public/                # Front-end estático
├── src/                   # Back-end (Express.js)
├── cypress.config.js
├── package.json
└── README.md
```

## 🛠 Testes
### Testes Funcionais (Cypress)
- Validação de campos obrigatórios
- Formatação automática de CPF/Telefone
- Bloqueio de SQL Injection e XSS

### Testes de Desempenho (JMeter)
- Simulação de 1000 usuários
- Validação de tempo de resposta (<2s)

### Segurança
- Headers de proteção (Helmet)
- Sanitização de entradas