import React from 'react';
import { Layout as AntLayout } from 'antd';
import LeftSidebar from './left-sidebar/LeftSidebar';
import RightSidebar from './right-sidebar/RightSidebar';
import styles from './Layout.module.css';

const { Sider, Content } = AntLayout;

const Layout: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
}) => {
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
