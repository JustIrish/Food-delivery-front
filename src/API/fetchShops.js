import axios from 'axios';

axios.defaults.baseURL = 'https://food-delivery-backend-r64y.onrender.com';

export const fetchShops = async () => {
  const response = await axios.get(`/api/shops`);
  return response.data;
};
