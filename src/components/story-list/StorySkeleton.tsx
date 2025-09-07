import { Skeleton } from 'antd';
import styles from './Story.module.css';

const StorySkeleton: React.FC = () => {
  return (
    <div className={styles.storyItem}>
      <Skeleton.Avatar size={56} active />
    </div>
  );
};

export default StorySkeleton;
