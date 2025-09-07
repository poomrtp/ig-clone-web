export type PostQuery = {
  search?: string;
  limit?: number;
  page?: number;
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

export type CreateLikeDataPayload = {
  postId: number;
  isLike: boolean;
};

export type CreateLikeDataResponse = {
  id: string;
  postId: number;
  isLike: boolean;
};
