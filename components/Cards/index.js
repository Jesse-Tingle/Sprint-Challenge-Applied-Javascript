// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

let cardsContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        BootstrapArray = response.data.articles.bootstrap;
        JavaScriptArray = response.data.articles.javascript;
        JQueryArray = response.data.articles.jquery;
        NodeArray = response.data.articles.node;
        TechnologyArray = response.data.articles.technology;

        BootstrapArray.forEach((e) => cardsContainer.appendChild(cardCreator(e)));
        JavaScriptArray.forEach((e) => cardsContainer.appendChild(cardCreator(e)));
        JQueryArray.forEach((e) => cardsContainer.appendChild(cardCreator(e)));
        NodeArray.forEach((e) => cardsContainer.appendChild(cardCreator(e)));
        TechnologyArray.forEach((e) => cardsContainer.appendChild(cardCreator(e)));
        
    })
    .catch((error) => {
        console.log(error);
    })


    function cardCreator(data) {
        let card = document.createElement('div');
        card.classList.add('card');


        let headline = document.createElement('div')
        headline.classList.add('headline');
        
        headline.textContent = data.headline;
        card.appendChild(headline);

        let author = document.createElement('div');
        author.classList.add('author');
        card.appendChild(author);

        let imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');
        

        let image = document.createElement('img');
        image.src = data.authorPhoto;

        let AuthorSpan = document.createElement('span');
        AuthorSpan.textContent = data.authorName;

        author.appendChild(imgContainer);
        imgContainer.appendChild(image);
        
        
        author.appendChild(AuthorSpan);

        image.textContent = data.image;
        AuthorSpan.textContent = data.authorName;
        

        return card;
    }