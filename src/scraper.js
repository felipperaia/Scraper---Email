const fetch   = require('node-fetch');
const cheerio = require('cheerio');
const { scraper } = require('./config');

/**
 * Faz scraping das top N quotes
 * @returns {Promise<Array<{ quote: string, author: string }>>}
 */
async function scrapeTopQuotes() {
  const res = await fetch(scraper.url);
  if (!res.ok) throw new Error(`Erro ${res.status} em ${scraper.url}`);
  const html = await res.text();
  const $    = cheerio.load(html);

  const results = [];
  $('.quote').each((i, el) => {
    if (i >= scraper.count) return false;
    const quote  = $(el).find('.text').text().trim();
    const author = $(el).find('.author').text().trim();
    if (quote && author) {
      results.push({ quote, author });
    }
  });

  return results;
}

module.exports = { scrapeTopQuotes };
