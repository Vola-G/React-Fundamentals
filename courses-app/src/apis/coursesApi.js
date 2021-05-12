export class Api {
    constructor(token) {
        this.token = token;
    }

    getCourses() {
        return {
            method: 'GET',
            url: '/all',
            baseURL: 'http://localhost:3000/courses/',
            headers: { 
                'accept': '*/*'
            }
        }
    }

    saveCourse(data) {
        return {
            method: 'POST',
            headers: { 
                'accept': '*/*',
                'Content-Type': 'application/json',
                'Authorization': this.token
            },
            data: JSON.stringify(data),
            url: `http://localhost:3000/courses/add`
        }
    }

    updateCourse(fetchData, id) {
        return {
            method: 'PUT',
            headers: { 
                'accept': '*/*',
                'Content-Type': 'application/json',
                'Authorization': this.token
            },
            data: JSON.stringify(fetchData),
            url: `http://localhost:3000/courses/${id}`
        };
    }

    deleteCourse(courseId) {
        return {
            method: 'DELETE',
            headers: { 
                'accept': '*/*',
                'Authorization': this.token
            },
            data: courseId,
            url: `http://localhost:3000/courses/${courseId}`
        };
    }

}
