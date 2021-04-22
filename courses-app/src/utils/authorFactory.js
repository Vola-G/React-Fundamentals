import uuid from 'react-uuid';

export function authorFactory(authorName) {
    let author = new Object();
    author.id = uuid();
    author.name = authorName;
    return author;
}
