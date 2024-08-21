import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const getBlockchainInfo = async () => {
  try {
    const response = await axios.get(`${API_URL}/blockchain-info`);
    return response.data;
  } catch (error) {
    console.error('Error fetching blockchain info:', error);
    throw error;
  }
};
