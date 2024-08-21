import axios from 'axios';

const API_URL = 'http://localhost:3000';

interface InvokeParams {
  contractAddress: string;
  entrypoint: string;
  parameter: object; // Change parameter type to object
}

export const invokeSmartContract = async (params: InvokeParams) => {
    console.log(params)
  try {
    const response = await axios.post(`${API_URL}/invoke`, params);
    return response.data;
  } catch (error) {
    console.error('Error invoking smart contract:', error);
    throw error;
  }
};
