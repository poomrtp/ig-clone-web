import { Story, StoryQuery } from '../../types/story.type';
import { PixabayData } from '../../types/pixabay.type';
import { getPostFromPixabay } from '../post/post.service';

export const getStories = async (query?: StoryQuery): Promise<Story[]> => {
  try {
    const pixabayPost = await getPostFromPixabay(query);

    const stories: Story[] = Array.from(
      new Map(
        pixabayPost.hits.map((photo: PixabayData) => [
          photo.user,
          {
            id: `${photo.id}`,
            username: photo.user,
            userImageURL: photo.userImageURL,
          },
        ])
      ).values()
    );
    return stories;
  } catch (error) {
    throw error;
  }
};
