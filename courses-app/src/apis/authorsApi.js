export class Api {
    constructor(token) {
        this.token = token;
    }

    getAuthors() {
        return {
            method: 'GET',
            headers: { 
                'accept': '*/*'
            },
            url: `http://localhost:3000/authors/all`
        };
    }

    saveAuthors(authorName) {
        return {
            method: 'POST',
            headers: { 
                'accept': '*/*',
                'Content-Type': 'application/json',
                'Authorization': this.token
            },
            data: JSON.stringify(authorName),
            url: `http://localhost:3000/authors/add`
        };
    }
}
