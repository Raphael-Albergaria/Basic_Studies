function Book(title, pages, tags, author) {
    this.title = title;
    this.pages = pages;
    this.tags = tags;
    this.author = author;
    this.published = false;
    this.inStock = 0;
    this.addOnStock = function addOnStock(quantity) {
        this.inStock += quantity;
    };
    this.save = function () {
        // Save book to database
    };
}

const author = { name: 'Christopher Paolini' };
const tags = ['fantasy', 'adventure'];

const starWars = new Book(
    'Star Wars: Um novo amanhecer',
    224,
    tags,
    'John Jackson Miller'
);

const estrelaPerdida = new Book('Estrelas perdidas', 448, tags, 'Claudia Gray');

const darkDisciple = new Book('Dark Disciple', 400, tags, 'Christian Golden');
darkDisciple.addOnStock(5);

console.log(starWars);
console.log(estrelaPerdida);
console.log(darkDisciple);
