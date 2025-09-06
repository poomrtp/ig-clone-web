import styles from './Post.module.css';
import { Card, Skeleton } from 'antd';

const PostSkeleton: React.FC = () => {
  return (
    <Card className={styles.post}>
      <div className={styles.postHeader}>
        <div className={styles.userInfo}>
          <Skeleton.Avatar active size="large" />
          <Skeleton.Input active />
        </div>
      </div>
      <Skeleton.Node active style={{ width: '468px', height: '360px' }} />
      <div>
        <Skeleton.Input
          size="small"
          active
          style={{ width: 80, marginBottom: 4, marginTop: 4 }}
        />
      </div>
      <Skeleton active />
    </Card>
  );
};

export default PostSkeleton;
