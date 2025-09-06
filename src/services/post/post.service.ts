import axios from 'axios';
import { PostData, PostQuery } from '../../types/post.type';
import { PixabayData, PixabayResponse } from '../../types/pixabay.type';

const PIXABAY_API_KEY = process.env.REACT_APP_PIXABAY_API_KEY;
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

const getPostFromPixabay = async (query?: PostQuery) => {
  const res = await axios.get<PixabayResponse>('https://pixabay.com/api/', {
    params: {
      key: PIXABAY_API_KEY,
      q: query?.search,
      per_page: query?.limit || 5,
      page: query?.page || 1,
    },
  });
  return res.data;
};
