import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const getStates = async () => {
  try {
    const response = await axios.get(`${API_URL}/states`);
    //console.log('States response:', response.data); // Add logging
    return response.data;
  } catch (error) {
    console.error('Error fetching states:', error);
    throw error;
  }
};

export const getStateCrops = async (stateId: number) => {
  const response = await axios.get(`${API_URL}/state/${stateId}/crops`);
  console.log("crops: "+response.data);
  return response.data;
};

export const getStateTips = async (stateId: number) => {
  const response = await axios.get(`${API_URL}/state/${stateId}/tips`);
  return response.data;
};

export const analyzeCrop = async (data: {
  cropId: number;
  stateId: number;
  area: number;
}) => {
  const response = await axios.post(`${API_URL}/analyze`, data);
  return response.data;
};

export const sendContactEmail = async (data: {
  name: string;
  email: string;
  message: string;
}) => {
  const response = await axios.post(`${API_URL}/contact`, data);
  return response.data;
};

export const addTip = async (data: {
  state_id: string;
  tip: string;
  added_by: string;
  details?: string;
}) => {
  const response = await axios.post(`${API_URL}/tips`, data);
  return response.data;
};