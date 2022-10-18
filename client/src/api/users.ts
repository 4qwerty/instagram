import axios from 'axios';

export const fetchUser = async () => {
    const url = 'localhost:8000/get';
    const response = await axios.get(url);
    console.log(response.data);
};