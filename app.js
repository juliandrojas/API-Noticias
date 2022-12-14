var url = 'https://newsapi.org/v2/everything?' +
'q=Apple&' +
'from=2022-12-14&' +
'sortBy=popularity&' +
'apiKey=45726a3029ef4daf9cd94238ecbfb140';

var req = new Request(url);

fetch(req)
    .then(function(response) {
        console.log(response.json());
    })