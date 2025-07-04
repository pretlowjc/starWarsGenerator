const quotes = require('./quotes');

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function displayQuote() {
    const quote = getRandomQuote();
    console.log(`"${quote.quote}" \n - ${quote.character} \n Movie: ${quote.movie} \n Trilogy: ${quote.trilogy}`);
}

displayQuote();



