import React, { useState } from 'react';
import { Card, Avatar, Button, Space, Typography } from 'antd';
import {
  HeartOutlined,
  MessageOutlined,
  SendOutlined,
  EllipsisOutlined,
  HeartFilled,
} from '@ant-design/icons';
import styles from './Post.module.css';
import { PostData } from '../../types/post.type';

type PostProps = PostData;

const { Text, Paragraph } = Typography;

const Post: React.FC<PostProps> = ({
  id,
  username,
  userImageURL,
  caption,
  imageUrl,
  likes,
  isLiked,
}) => {
  const [isCurrentLike, setIsCurrentLike] = useState(isLiked);
  const [expandedCaption, setExpandedCaption] = useState(false);

  const handleClickLike = () => {
    setIsCurrentLike((prev) => !prev);

    // next action to req api
  };
  return (
    <Card className={styles.post}>
      <div className={styles.postHeader}>
        <div className={styles.userInfo}>
          <Avatar src={userImageURL} size="large" />
          <Text strong className={styles.usernameText}>
            {username}
          </Text>
        </div>
        <Button
          type="text"
          icon={<EllipsisOutlined />}
          className={styles.actionButton}
        />
      </div>

      <div className={styles.postImage} onClick={handleClickLike}>
        <img src={imageUrl} alt={caption} />
      </div>

      <div className={styles.postActions}>
        <Space size="small">
          <Button
            type="text"
            shape="circle"
            icon={isCurrentLike ? <HeartFilled /> : <HeartOutlined />}
            className={`${styles.likeButton} ${isCurrentLike ? styles.active : ''}`}
            onClick={handleClickLike}
          />
          <Button
            type="text"
            shape="circle"
            icon={<MessageOutlined />}
            className={styles.actionButton}
          />
          <Button
            type="text"
            shape="circle"
            icon={<SendOutlined />}
            className={styles.actionButton}
          />
        </Space>
      </div>

      <div className={styles.likes}>
        <Text strong className={styles.likesText}>
          {likes > 0 && `ถูกใจ ${likes} คน`}
        </Text>
      </div>

      <Paragraph
        className={styles.captionText}
        ellipsis={{
          rows: 2,
          symbol: (
            <Text strong className={styles.captionEllipsisText}>
              เพิ่มเติม
            </Text>
          ),
          expandable: true,
          expanded: expandedCaption,
          onExpand: (_, info) => setExpandedCaption(info.expanded),
        }}
      >
        <Text strong className={styles.captionUsername}>
          {username}
        </Text>
        {caption}
      </Paragraph>
    </Card>
  );
};

export default Post;
