import React from 'react';
import { Avatar, Button, Typography, Skeleton } from 'antd';
import styles from './RightSidebar.module.css';
import { useAtomValue } from 'jotai';
import { isLoadingProfileAtom, profileAtom } from '../../../atoms/profile.atom';
import { useQuery } from '@tanstack/react-query';
import { getSuggestUsers } from '../../../services/suggest-user/suggest-user.service';

const { Text } = Typography;

const RightSidebar: React.FC = () => {
  const limit = 5;

  const profile = useAtomValue(profileAtom);
  const isLoadingProfile = useAtomValue(isLoadingProfileAtom);

  const { data: suggestUsers } = useQuery({
    queryKey: ['getSuggestUsers'],
    queryFn: () => getSuggestUsers({ limit }),
    staleTime: 60 * 1000,
  });

  const CurrentUserSkeleton = () => (
    <div className={styles.currentUser}>
      <Skeleton.Avatar size={56} active />
      <div className={styles.userInfo}>
        <Skeleton.Input
          size="small"
          active
          style={{ width: 80, marginBottom: 4 }}
        />
        <Skeleton.Input size="small" active style={{ width: 60 }} />
      </div>
      <Skeleton.Button size="small" active style={{ width: 50 }} />
    </div>
  );

  const SuggestionsSkeleton = () => (
    <div className={styles.suggestions}>
      <div className={styles.suggestionsHeader}>
        <Skeleton.Input size="small" active style={{ width: 120 }} />
        <Skeleton.Button size="small" active style={{ width: 60 }} />
      </div>
      <div className={styles.suggestionsList}>
        {[1, 2, 3, 4, 5].map((index) => (
          <div key={index} className={styles.suggestionItem}>
            <Skeleton.Avatar size={32} active />
            <div className={styles.suggestionInfo}>
              <Skeleton.Input
                size="small"
                active
                style={{ width: 80, marginBottom: 4 }}
              />
              <Skeleton.Input size="small" active style={{ width: 100 }} />
            </div>
            <Skeleton.Button size="small" active style={{ width: 50 }} />
          </div>
        ))}
      </div>
    </div>
  );

  if (isLoadingProfile) {
    return (
      <div className={styles.rightSidebar}>
        <CurrentUserSkeleton />
        <SuggestionsSkeleton />
      </div>
    );
  }

  return (
    <div className={styles.rightSidebar}>
      <div className={styles.currentUser}>
        <Avatar size={44} src={profile.userImageURL} />
        <div className={styles.userInfo}>
          <Text strong className={styles.username}>
            {profile.username}
          </Text>
          <Text className={styles.displayName}>{profile.username}</Text>
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
          {suggestUsers?.map((suggestion, index) => (
            <div key={index} className={styles.suggestionItem}>
              <Avatar size={44} src={suggestion.userImageURL} />
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
