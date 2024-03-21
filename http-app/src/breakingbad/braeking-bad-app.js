
const fetchQuote = async () => {
    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    const data = await res.json();
    console.log(data[0]);
    return data[0]
}

export const BreakingBadApp = async (element) => {
    document.querySelector('#app-title').textContent = 'Breaking Bad App';
    element.innerHTML = 'Loading...';
    const quote = await fetchQuote();
    element.innerHTML = 'Tenemos data!';
}