require('dotenv').config();

module.exports = {
  scraper: {
    url: process.env.SCRAPER_URL,
    count: parseInt(process.env.SCRAPER_COUNT, 10) || 10,
  },
  email: {
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT, 10) || 587,
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
  },
};
