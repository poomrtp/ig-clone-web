import axios from 'axios';
import { JSON_SERVER_API } from '../../config/json-server.config';
import { Profile } from '../../types/profile.type';

export const getProfile = async (): Promise<Profile> => {
  const res = await axios.get<Profile>(`${JSON_SERVER_API}/profile`);
  return res.data;
};
