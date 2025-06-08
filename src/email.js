const nodemailer = require('nodemailer');
const { email } = require('./config');

/**
 * Gera o HTML com a lista de quotes
 * @param {Array<{ quote: string, author: string }>} items
 * @returns {string}
 */
function buildHtml(items) {
  const lines = items
    .map(
      (q, i) =>
        `<li>
          <strong>${i + 1}.</strong>
          “${q.quote}”
          — <em>${q.author}</em>
        </li>`
    )
    .join('');
  return `
    <h2>Top ${items.length} Quotes</h2>
    <ul>
      ${lines}
    </ul>
    <p>Enviado em: ${new Date().toLocaleString()}</p>
  `;
}

/**
 * Envia um e-mail com o conteúdo HTML gerado
 * @param {Array<{ quote: string, author: string }>} items
 */
async function sendEmail(items) {
  const transporter = nodemailer.createTransport({
    host: email.host,
    port: email.port,
    secure: email.secure,
    auth: email.auth,
  });

  const htmlContent = buildHtml(items);

  const mailOptions = {
    from: email.from,
    to: email.to,
    subject: `Top ${items.length} Quotes`,
    html: htmlContent,
  };

  const info = await transporter.sendMail(mailOptions);
  console.log('✅ E-mail enviado:', info.messageId);
}

module.exports = { sendEmail };
