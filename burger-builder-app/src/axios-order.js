import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-react-9525e.firebaseio.com'
});

export default instance;
