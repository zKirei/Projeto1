const express = require('express');
const app = express();
const helmet = require('helmet');

// ===========================================
// Configuração Avançada do Helmet
// ===========================================
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"],
      styleSrc: ["'self'"],
      imgSrc: ["'self'", "data:"],
      fontSrc: ["'self'"],
      objectSrc: ["'none'"],
      frameAncestors: ["'none'"],
      formAction: ["'self'"],
      baseUri: ["'self'"],
      upgradeInsecureRequests: [],
      connectSrc: ["'self'"],
      mediaSrc: ["'self'"],
      childSrc: ["'self'"]
    },
    reportOnly: false
  },
  hsts: {
    maxAge: 63072000,
    includeSubDomains: true,
    preload: true
  },
  referrerPolicy: { policy: 'strict-origin-when-cross-origin' },
  xPoweredBy: false
}));

// ===========================================
// Middleware Adicional para Headers
// ===========================================
app.use((req, res, next) => {
  // Garantir remoção total do X-Powered-By
  res.removeHeader('X-Powered-By');
  
  // Headers adicionais de segurança
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Permissions-Policy', 'geolocation=(), microphone=()');
  
  next();
});

// ===========================================
// Rotas para Mitigar Falsos Positivos
// ===========================================
app.get('/robots.txt', (req, res) => {
  res.type('text/plain').send('User-agent: *\nDisallow: /');
});

app.get('/sitemap.xml', (req, res) => {
  res.type('application/xml').send('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n</urlset>');
});

// ===========================================
// Rotas e Configurações do Servidor
// ===========================================
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bem-vindo ao SGHSS! Acesse /cadastro-paciente.html para cadastrar pacientes.');
});

app.post('/pacientes', (req, res) => {
  console.log('Dados recebidos:', req.body);
  res.status(201).json({ mensagem: 'Cadastro realizado com sucesso!' });
});

// Servir arquivos estáticos com cache seguro
app.use(express.static('public', {
  setHeaders: (res) => {
    res.setHeader('Cache-Control', 'no-store, max-age=0');
  }
}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor seguro rodando em http://localhost:${PORT}`);
});