document.addEventListener("DOMContentLoaded", () => {
    getCards();
});
async function getCards() {
    var url = 'https://newsapi.org/v2/everything?' + 'q=Apple&' + 'from=2022-12-14&' + 'sortBy=popularity&' + 'apiKey=45726a3029ef4daf9cd94238ecbfb140';
    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
        //Paint the cards
        paintCards(result.articles);
    } catch (error) {
        console.log(error);
    }
}
function paintCards(cards) {
    const sectionCards = document.querySelector("#newsCards");
    let html = "";
    cards.forEach((card) => {
        const { author, content, description, publishedAt, source, title, url, urlToImage } = card;
        html += `
        <div class="col mb-4">
            <div class="card"">
                <img src="${urlToImage}" class="card-img-top img-fluid" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${description}</p>
                    <h6 class="card-text">${author}</h6>
                    <h6 class="card-text">Published at: ${publishedAt}</h6>
                    <h6 class="card-text">Source: ${source.name}</h6>
                    <a href="${url}" target="_blank" class="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>
        `;
        sectionCards.innerHTML = html;
    })
}