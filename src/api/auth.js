import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

export const signUp = async ({ name, email, password }) => {
    const res = await axios.post(`${API_BASE_URL}/api/auth/register`, {
        name,
        email,
        password,
    });
    return res.data;
};

export const login = async ({ email, password }) => {
    const res = await axios.post(`${API_BASE_URL}/api/auth/login`, {
        email,
        password,
    });
    return res.data;
};
