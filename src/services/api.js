import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: {
    accept: 'application/json',
  },
});

const sheets = {
  getUsers: () => api.get("users/"),
  getUserNameById: (id) => api.get(`users/${id}`),
  getPosts: () => api.get("posts/"),
  getToDos: () => api.get("todos/"),
}

export default sheets;
