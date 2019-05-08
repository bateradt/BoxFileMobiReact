import axios from 'axios';

const api = axios.create({
    baseURL: 'https://tchelaobackend.herokuapp.com',
});

export default api;