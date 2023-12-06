
const libreria = "https://striveschool-api.herokuapp.com/books"

fetch(libreria)
.then(response => response.json())
.then(data => {
    data.forEach(item => {
        const bookTitle = item.title
        const bookCover = item.img
        const bookPrice = item.price
        const bookCategory = item.category

        const template = `
        <div class="col-4">
                <div class="card">
                    <img src="${bookCover}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">
                        ${bookTitle}
                        <p class="card-text">${bookPrice} &euro;</p>
                        </h5>
                        <a href="#" class="btn btn-primary">${bookCategory}</a>
                        <button class="btn btn-danger" onclick="removeBook(this)">Scarta</button>
                    </div>
                </div>
            </div>
        `
        document.querySelector(".row").innerHTML += template
    })
})

.catch(error => console.log(`Errore durante la richiesta dei dati: ${error}`))

const bookCard = document.querySelectorAll('.card')

function removeBook(button) {
    const bookCard = button.closest('.book-card');
    bookCard.remove();
  }