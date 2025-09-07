import axios from 'axios';
import {
  CreateLikeDataPayload,
  CreateLikeDataResponse,
  PostData,
  PostQuery,
} from '../../types/post.type';
import { PixabayData, PixabayResponse } from '../../types/pixabay.type';
import { PIXABAY_API, PIXABAY_API_KEY } from '../../config/pixabay.config';
import { JSON_SERVER_API } from '../../config/json-server.config';

export const getPost = async (query?: PostQuery) => {
  try {
    const pixabayPost = await getPostFromPixabay(query);

    const posts: PostData[] = pixabayPost.hits.map((photo: PixabayData) => ({
      id: photo.id,
      username: photo.user,
      userImageURL: photo.userImageURL,
      caption: photo.tags,
      imageUrl: photo.webformatURL,
      likes: photo.likes,
      isLiked: false,
    }));
    return posts;
  } catch (error) {
    throw error;
  }
};

export const getPostFromPixabay = async (
  query?: PostQuery
): Promise<PixabayResponse> => {
  const res = await axios.get<PixabayResponse>(PIXABAY_API, {
    params: {
      key: PIXABAY_API_KEY,
      q: query?.search,
      per_page: query?.limit || 5,
      page: query?.page || 1,
    },
  });
  return res.data;
};

export const createLike = async (
  postData: CreateLikeDataPayload
): Promise<CreateLikeDataResponse> => {
  const res = await axios.post<CreateLikeDataResponse>(
    `${JSON_SERVER_API}/likes`,
    postData
  );
  return res.data;
};

export const deleteLike = async (
  likeId: string
): Promise<CreateLikeDataResponse> => {
  const res = await axios.delete<CreateLikeDataResponse>(
    `${JSON_SERVER_API}/likes/${likeId}`
  );
  return res.data;
};
