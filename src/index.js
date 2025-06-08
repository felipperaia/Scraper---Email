const { scrapeTopQuotes } = require('./scraper');
const { sendEmail }      = require('./email');

(async () => {
  try {
    console.log('🚀 Scraping quotes…');
    const quotes = await scrapeTopQuotes();
    console.log(`🔍 Achadas ${quotes.length} quotes.`);
    console.log('✉️  Enviando e-mail…');
    await sendEmail(quotes);
    console.log('🎉 Concluído!');
  } catch (e) {
    console.error('❌ Falhou:', e);
    process.exit(1);
  }
})();
