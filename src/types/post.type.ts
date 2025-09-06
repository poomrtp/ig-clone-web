export type PostQuery = {
  search?: string;
  limit?: number;
  page?: number;
};

export type PostsResponse = {
  posts: PostData[];
};

export type PostData = {
  id: number;
  username: string;
  userImageURL: string;
  caption: string;
  imageUrl: string;
  likes: number;
  isLiked: boolean;
};
