



// <div class="card" style="width: 18rem;">
//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>

function createLayout(){
    let containerEl = document.createElement('div')
    containerEl.className = 'container'

    containerEl.appendChild(renderMovies())

    document.body.appendChild(containerEl)
}

createLayout()


function createMovieEl(movie){
    // Card Container
    let cardContainerEl = document.createElement("div")
    cardContainerEl.className = "card p-1"
    cardContainerEl.style.width = '18rem'

    // Card Image
    let cardImgEl = document.createElement('img')
    cardImgEl.src = movie.imageUrl
    cardImgEl.addEventListener('error', function(){
        cardImgEl.src = 'http://picsum.photos/200/200'
    })
    
    cardImgEl.className = "card-img-top movie__img"
    cardImgEl.setAttribute('alt', movie.description)

    cardContainerEl.appendChild(cardImgEl)

    // Card body
    let cardBodyEl = document.createElement('div')
    cardContainerEl.appendChild(cardBodyEl)
    // Card Title
    let cardTitleEl = document.createElement('h5')
    cardTitleEl.className = 'card-title'
    cardTitleEl.textContent = movie.title
    cardBodyEl.appendChild(cardTitleEl)

    // Card description
    let cardDescEl = document.createElement('p')
    cardDescEl.className = 'card-text'
    cardDescEl.textContent = movie.description
    cardBodyEl.appendChild(cardDescEl)

    return cardContainerEl
}

function renderMovies(){
    let rowEl = document.createElement('div')
    rowEl.className = 'row justify-content-center mt-3 g-2'

    for(let i=0; i < movies.length; i++){
        let colEl = document.createElement('div')
        colEl.className = 'col text-center col-lg-4 col-md-6'

        let cardEl = createMovieEl(movies[i]);
        colEl.appendChild(cardEl)
        rowEl.appendChild(colEl)
    }
    return rowEl
}
