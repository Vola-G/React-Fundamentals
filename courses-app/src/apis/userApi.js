export class Api {

    getUser(registrData) {
        return {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            data: registrData,
            url: "http://localhost:3000/register"
          };
    }

    loginUser(loginData) {
        return {
            method: 'POST',
            headers: { 
                'content-type': 'application/json' 
            },
            data: JSON.stringify(loginData),
            url: "http://localhost:3000/login"
        };
    }

    logoutUser() {
        return {
            method: 'DELETE',
            headers: { 
                'accept': '*/*'
            },
            url: "http://localhost:3000/logout"
        };
    }
}
