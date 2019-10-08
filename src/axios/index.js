import axios from 'axios';

export default axios.create({
  baseURL: 'https://app-conciertos.herokuapp.com/api/v1'
});
