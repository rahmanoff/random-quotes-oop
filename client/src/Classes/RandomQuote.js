import quotes from '../data/quotes.js';
import MathUtils from '../utils/MathUtils.js';
import Quote from './Quote.js';

class RandomQuote {
  static getRandomQuote() {
    const randomIndex = MathUtils.generateRandomInt(quotes.length);
    const { id, text, author } = quotes[randomIndex];
    return new Quote(id, text, author);
  }

  static async getRandomQuoteViaAPI() {
    const url = 'http://api.quotable.io/quotes/random';
    const options = { headers: { 'Contrnt-Type': 'application/json' } };
    try {
      const response = await fetch(url, options);
      const quotes = await response.json();
      if (Array.isArray(quotes) && quotes.length === 1) {
        const { _id: id, content, author } = quotes[0];
        if (id && content && author) {
          return new Quote(id, content, author);
        }
      }
    } catch (error) {
      console.error(error);
    }
  }
}

export default RandomQuote;
