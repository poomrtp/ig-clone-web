import axios from 'axios';
import { JSON_SERVER_API } from '../../config/json-server.config';
import { SuggestUser, SuggestUserQuery } from '../../types/suggest-user.type';

export const getSuggestUsers = async (
  query?: SuggestUserQuery
): Promise<SuggestUser[]> => {
  const res = await axios.get<SuggestUser[]>(
    `${JSON_SERVER_API}/suggestUsers`,
    {
      params: {
        _limit: query?.limit || 5,
      },
    }
  );
  return res.data;
};
