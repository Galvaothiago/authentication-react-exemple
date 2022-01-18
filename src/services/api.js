import axios from 'axios';

const token = localStorage.getItem('gasstationToken').replace(/"/g, "")

export const api = axios.create({
    baseURL: 'http://localhost:8080/api/auth',
    headers: {
        Authorization: `Bearer ${token}`
    }
})