# README.md

````markdown
# hn-scraper-email

Projeto Node.js para realizar scraping de frases do site [quotes.toscrape.com](https://quotes.toscrape.com/) e enviar as informações por e-mail.

## 🌟 Funcionalidades

- Faz scraping das top N "quotes" e autores
- Gera e envia um e-mail com a lista formatada
- Configurável via arquivo `.env`

## 🚀 Tecnologias

- [Node.js](https://nodejs.org)
- [Cheerio](https://www.npmjs.com/package/cheerio)
- [node-fetch](https://www.npmjs.com/package/node-fetch)
- [Nodemailer](https://nodemailer.com)
- [dotenv](https://www.npmjs.com/package/dotenv)

## 📁 Estrutura de Pastas

```bash
hn-scraper-email/
├── src/
│   ├── config.js      # Leitura de variáveis de ambiente
│   ├── scraper.js     # Lógica de scraping
│   ├── email.js       # Montagem e envio do e-mail
│   └── index.js       # Ponto de entrada
├── .env.example       # Template de variáveis de ambiente
├── .gitignore         # Lista de arquivos ignorados pelo Git
├── package.json       # Dependências e scripts
└── README.md          # Documentação do projeto
````

````

## ⚙️ Configuração

1. Crie o arquivo de exemplo:
   
   .env
````

2. Preencha as variáveis em `.env`:

   ```dotenv
   SCRAPER_URL=https://quotes.toscrape.com/
   SCRAPER_COUNT=10

   EMAIL_HOST=smtp.exemplo.com
   EMAIL_PORT=587
   EMAIL_SECURE=false
   EMAIL_USER=seu_usuario@exemplo.com
   EMAIL_PASS=sua_senha_ou_token
   EMAIL_FROM="Seu Nome" <seu_usuario@exemplo.com>
   EMAIL_TO=destinatario@exemplo.com
   ```

## ▶️ Como Executar

```bash
npm install
npm start
```

> Você verá logs de scraping e envio, e receberá o e-mail com as quotes.
