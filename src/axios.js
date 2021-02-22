import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://zelda-api.apius.cc/api/games'
});

export default instance;