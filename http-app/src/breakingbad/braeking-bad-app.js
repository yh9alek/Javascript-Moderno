
const fetchQuote = async () => {
    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    const data = await res.json();
    console.log(data[0]);
    return data[0]
}

export const BreakingBadApp = async (element) => {
    document.querySelector('#app-title').textContent = 'Breaking Bad App';
    element.innerHTML = 'Loading...';

    const quoteLabel = document.createElement('blockquote');
    const authoLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.innerText = 'Next Quote';

    const renderQuote = (quote) => {
        quoteLabel.innerHTML = quote.quote;
        authoLabel.innerHTML = quote.author;
        element.replaceChildren(quoteLabel, authoLabel, nextQuoteButton);
    }

    nextQuoteButton.addEventListener('click', e => {
        element.innerHTML = 'Loading...';
        fetchQuote()
        .then(renderQuote);
    });

    fetchQuote()
        .then(renderQuote);
}