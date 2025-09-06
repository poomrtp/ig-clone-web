import React from 'react';
import styles from './Story.module.css';
import StoryItem from './StoryItem';

const StoryList: React.FC = () => {
  const stories = [
    { name: 'takaseto', imgUrl: 'https://placehold.co/150' },
    { name: 'mahiru', imgUrl: 'https://placehold.co/150' },
    { name: 'taka_10969', imgUrl: 'https://placehold.co/150' },
    { name: 'daidai', imgUrl: 'https://placehold.co/150' },
  ];
  return (
    <div className={styles.storyList}>
      {stories.map((story) => (
        <StoryItem key={story.name} name={story.name} imgUrl={story.imgUrl} />
      ))}
    </div>
  );
};

export default StoryList;
