import Axios from 'axios';

const axios = Axios.create({  
  baseURL: `http://localhost:9090/api/`,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': localStorage.token ? `Bearer ${localStorage.token}` : '',
  }
})

export default axios;