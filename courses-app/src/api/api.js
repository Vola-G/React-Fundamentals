import axios from "axios";
import store from "../store/index";

export class Api {
    constructor() {
        this.axiosInstance = axios.create({
            baseURL: "http://localhost:3000",
            timeout: 1000,
            headers: { 
                'accept': '*/*',
                'Content-Type': 'application/json'
            }
        })
        this.setInterseptors();
    }

    setInterseptors() {
        this.axiosInstance.interceptors.request.use(function (config) {
            config.headers["Authorization"] = store.getState().userReducer.token;
            return config;
        }, function (error) {
            return Promise.reject(error);
        });
        
        this.axiosInstance.interceptors.response.use(function (response) {
            return response.data;
        }, function (error) {
            return Promise.reject(error);
        });
    }

    getAuthors() {
        return this.axiosInstance.get("/authors/all")
    }

    saveAuthors(authorName) {
        return this.axiosInstance.post("/authors/add", authorName)
    }

    getCourses() {
        return this.axiosInstance.get("/courses/all")
    }

    saveCourse(data) {
        return this.axiosInstance.post("/courses/add", data)
    }

    updateCourse(fetchData, id) {
        return this.axiosInstance.put(`/courses/${id}`, fetchData)
    }

    deleteCourse(courseId) {
        return this.axiosInstance.delete(`/courses/${courseId}`)
    }

    registerUser(registrData) {
        return this.axiosInstance.post("/register", registrData)
    }

    loginUser(loginData) {
        return this.axiosInstance.post("/login", loginData)
    }

    authorizeUser() {
        return this.axiosInstance.get("/users/me")
    }

    logoutUser() {
        return this.axiosInstance.delete("/logout")
    }

}
