import React from 'react';
import styles from './Story.module.css';
import { Avatar } from 'antd';

type StoryItemProps = {
  name: string;
  imgUrl: string;
};

const StoryItem: React.FC<StoryItemProps> = ({ name, imgUrl }) => {
  return (
    <div className={styles.storyItem}>
      <Avatar size={56} src={imgUrl} className={styles.storyAvatar} />
      <span className={styles.storyName}>{name}</span>
    </div>
  );
};

export default StoryItem;
