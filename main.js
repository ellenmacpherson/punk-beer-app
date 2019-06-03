const app = document.getElementById('main');
const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

const request = new XMLHttpRequest();
request.open ('GET', 'https://api.punkapi.com/v2/beers', true);
const genericErrorText = "Sorry, all taps seem to be off. We can't get any beers for you right now :(";

request.onload = function() {
   if (request.status >= 200 && request.status <= 400) {
    const data = JSON.parse(this.response);
    data.forEach(beer => {

        

        const flipCard = document.createElement('div');
        flipCard.setAttribute('class', 'flipCard');

        let flipCardInner= document.createElement('div');
        flipCardInner.setAttribute('class', 'flipCardInner');

        let flipCardFront = document.createElement('div');
        flipCardFront.setAttribute('class', 'flipCardFront');

        let flipCardBack = document.createElement('div');
        flipCardBack.setAttribute('class', 'flipCardBack');

        const beerImages = document.createElement('img');
        beerImages.setAttribute('src', beer.image_url);

        const beerHeaders = document.createElement('h1');
        beerHeaders.textContent = beer.name;
        beerHeaders.setAttribute('class', 'titles');

        const beerTaglines = document.createElement('h2');
        beerTaglines.textContent = beer.tagline;

        const foodPairings = document.createElement('p')
        foodPairings.textContent = `Food Pairing: ${beer.food_pairing}`;
        foodPairings.setAttribute('class', 'foodPairings');

        const abv = document.createElement('p');
        abv.textContent = `ABV: ${beer.abv}%`;
        abv.setAttribute('class', 'abv');

        const beerDescription = document.createElement('p');
        beerDescription.textContent = beer.description;
        beerDescription.setAttribute('class', 'beerDescription');

        console.log(beer.food_pairing);

        container.appendChild(flipCard);
        flipCard.appendChild(flipCardInner);
        flipCardInner.appendChild(flipCardFront);
        flipCardInner.appendChild(flipCardBack);
        flipCardFront.appendChild(beerHeaders);
        flipCardFront.appendChild(beerTaglines);
        flipCardBack.appendChild(beerImages);
        flipCardBack.appendChild(abv);
        flipCardBack.appendChild(beerDescription);
        flipCardBack.appendChild(foodPairings);
        
    });
   } else {
       let genericError = document.createElement('h1');
       genericError.textContent = genericErrorText;
       app.appendChild(genericError);
   }
};

request.send();