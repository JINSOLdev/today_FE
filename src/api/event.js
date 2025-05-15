import axios from 'axios';
import { authHeader } from './auth';

const API_BASE_URL = 'http://localhost:5000';

// 내가 만든 약속
export const getMyEvents = async () => {
    const res = await axios.get(`${API_BASE_URL}/api/events/my-events/created`, authHeader());
    return res.data;
};

// 초대 받은 약속
export const getInvitedEvents = async () => {
    const res = await axios.get(`${API_BASE_URL}/api/events/my-events/invited`, authHeader());
    return res.data
};

// 내가 수락한 약속
export const getAcceptedEvents = async () => {
    const res = await axios.get(`${API_BASE_URL}/api/events/my-events/accepted`, authHeader());
    return res.data
};
