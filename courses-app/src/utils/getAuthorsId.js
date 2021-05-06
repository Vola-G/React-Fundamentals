export function getAuthorsId(authorsList) {
    let authorsId = authorsList.map(author => author.id);
    return {"authors": authorsId}
}
