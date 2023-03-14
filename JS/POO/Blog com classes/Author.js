const Post = require('./Post');

class Author {
    constructor(name) {
        this.name = name;
        this.post = [];
    }
    newPost(title, body) {
        const post = new Post(title, body, this.name);
        this.post.push(post);
        return post;
    }
}
module.exports = Author;
