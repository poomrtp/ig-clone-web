import React from 'react';
import styles from './Story.module.css';
import { Avatar } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const StoryItemCreate: React.FC = () => {
  return (
    <div className={styles.storyItem}>
      <Avatar
        size={56}
        icon={<PlusOutlined />}
        className={styles.storyCreate}
      />
    </div>
  );
};

export default StoryItemCreate;
