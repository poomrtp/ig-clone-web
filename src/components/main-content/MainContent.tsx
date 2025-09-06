import React from 'react';
import styles from './MainContent.module.css';
import { useQuery } from '@tanstack/react-query';
import { getPost } from '../../services/post/post.service';

const MainContent: React.FC = () => {
  const {} = useQuery({ queryKey: ['getPost'], queryFn: () => getPost() });
  return (
    <div className={styles.mainContent}>
      <div className={styles.postContainer}></div>
    </div>
  );
};

export default MainContent;
