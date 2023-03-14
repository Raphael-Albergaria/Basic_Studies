const Author = require('./Author');

const rapha = new Author('Raphael');
const post = rapha.newPost('Meu primeiro post', 'esse foi meu primeiro post');

post.newComment('Fulano', 'muito bom');
post.newComment('Sicrano', 'continue assim');

console.log(rapha);
console.log(post);
