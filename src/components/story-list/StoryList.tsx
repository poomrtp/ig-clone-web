import React from 'react';
import styles from './Story.module.css';
import StoryItem from './StoryItem';
import { useQuery } from '@tanstack/react-query';
import { getStories } from '../../services/story/story.service';
import StorySkeleton from './StorySkeleton';
import StoryItemCreate from './StoryItemCreate';

const StoryList: React.FC = () => {
  const page = 1;
  const limit = 20;
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ['getStories'],
    queryFn: () => getStories({ page, limit }),
    staleTime: 60 * 1000,
  });

  const StoryLoading = () => (
    <React.Fragment>
      {[1, 2, 3, 4, 5].map((index) => (
        <StorySkeleton key={index} />
      ))}
    </React.Fragment>
  );

  return (
    <div className={styles.storyList}>
      {isLoading && !isSuccess && <StoryLoading />}
      {isSuccess && data?.length === 0 && <StoryItemCreate />}
      {data?.map((story) => (
        <StoryItem
          key={story.id}
          name={story.username}
          imgUrl={story.userImageURL}
        />
      ))}
    </div>
  );
};

export default StoryList;
