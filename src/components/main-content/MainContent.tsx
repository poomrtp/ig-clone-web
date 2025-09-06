import React from 'react';
import styles from './MainContent.module.css';

const MainContent: React.FC = () => {
  return (
    <div className={styles.mainContent}>
      <div className={styles.postContainer}></div>
    </div>
  );
};

export default MainContent;
