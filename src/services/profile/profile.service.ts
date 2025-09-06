import axios from 'axios';

const ID = 1;

export const getProfile = async () => {
  const res = await axios.get(`http://localhost:3001/profiles/${ID}`);
  return res.data;
};
