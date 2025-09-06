import React from 'react';
import { Layout as AntLayout } from 'antd';
import LeftSidebar from './left-sidebar/LeftSidebar';
import RightSidebar from './right-sidebar/RightSidebar';
import styles from './Layout.module.css';
import { useQuery } from '@tanstack/react-query';
import { getProfile } from '../../services/profile/profile.service';
import { useSetAtom } from 'jotai';
import { profileAtom, isLoadingProfileAtom } from '../../atoms/profile.atom';

const { Sider, Content } = AntLayout;

const Layout: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
}) => {
  const setProfile = useSetAtom(profileAtom);
  const setIsProfileLoading = useSetAtom(isLoadingProfileAtom);
  useQuery({
    queryKey: ['getUser'],
    queryFn: async () => {
      setIsProfileLoading(true);
      const profile = await getProfile();
      setProfile(profile);
      setIsProfileLoading(false);
      return profile;
    },
  });

  return (
    <AntLayout className={styles.layout}>
      <AntLayout>
        <Sider width={280} className={styles.leftSidebar} breakpoint="md">
          <LeftSidebar />
        </Sider>
        <Content>{children}</Content>
        <Sider width={320} className={styles.rightSidebar} breakpoint="xl">
          <RightSidebar />
        </Sider>
      </AntLayout>
    </AntLayout>
  );
};

export default Layout;
