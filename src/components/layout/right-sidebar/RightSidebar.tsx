import React from 'react';
import { Avatar, Button, Typography } from 'antd';
import styles from './RightSidebar.module.css';

const { Text } = Typography;

const RightSidebar: React.FC = () => {
  const suggestions = [
    { username: 'noda', followers: [] },
    { username: 'yourness', followers: [] },
    { username: 'ren', followers: [] },
    { username: 'masuwo', followers: [] },
    { username: 'suis', followers: [] },
  ];

  return (
    <div className={styles.rightSidebar}>
      <div className={styles.currentUser}>
        <Avatar size={56}>
          <img src="https://placehold.co/150" alt="my avatar" />
        </Avatar>
        <div className={styles.userInfo}>
          <Text strong className={styles.username}>
            poomrtp7
          </Text>
          <Text className={styles.displayName}>poomrtp</Text>
        </div>
        <Button type="link" className={styles.linkButton}>
          เปลี่ยน
        </Button>
      </div>
      <div className={styles.suggestions}>
        <div className={styles.suggestionsHeader}>
          <Text strong className={styles.suggestionsTitle}>
            แนะนำสำหรับคุณ
          </Text>
          <Button type="link" className={styles.seeAllButton}>
            ดูทั้งหมด
          </Button>
        </div>

        <div className={styles.suggestionsList}>
          {suggestions.map((suggestion, index) => (
            <div key={index} className={styles.suggestionItem}>
              <Avatar size={32} className={styles.suggestionAvatar}>
                {suggestion.username}
              </Avatar>
              <div className={styles.suggestionInfo}>
                <Text strong className={styles.suggestionUsername}>
                  {suggestion.username}
                </Text>
                <Text className={styles.suggestionFollowers}>
                  {suggestion.followers.length === 0
                    ? 'แนะนำสำหรับคุณ'
                    : `ติดตามโดย ${suggestion.followers[0]} และคนอื่นๆ`}
                </Text>
              </div>
              <Button type="link" className={styles.linkButton}>
                ติดตาม
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
