import React, { useEffect, useState } from 'react';
import { Drawer, Grid, Input, Menu } from 'antd';
import {
  HomeOutlined,
  SearchOutlined,
  CompassOutlined,
  PlayCircleOutlined,
  MessageOutlined,
  HeartOutlined,
  PlusOutlined,
  UserOutlined,
  MenuOutlined,
  InstagramOutlined,
} from '@ant-design/icons';
import { useAtom } from 'jotai';
import { searchQueryAtom } from '../../../atoms/search.atom';
import styles from './LeftSidebar.module.css';

const { useBreakpoint } = Grid;

const LeftSidebar: React.FC = () => {
  const navigationItems = [
    { key: 'home', icon: <HomeOutlined />, label: 'หน้าหลัก' },
    { key: 'search', icon: <SearchOutlined />, label: 'ค้นหา' },
    { key: 'explore', icon: <CompassOutlined />, label: 'สำรวจ' },
    { key: 'reels', icon: <PlayCircleOutlined />, label: 'Reels' },
    { key: 'messages', icon: <MessageOutlined />, label: 'ข้อความ' },
    { key: 'notifications', icon: <HeartOutlined />, label: 'การแจ้งเตือน' },
    { key: 'create', icon: <PlusOutlined />, label: 'สร้าง' },
    { key: 'profile', icon: <UserOutlined />, label: 'โปรไฟล์' },
    { key: 'more', icon: <MenuOutlined />, label: 'เพิ่มเติม' },
  ];

  const screens = useBreakpoint();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isShowSearchDrawer, setIsShowSearchDrawer] = useState(false);
  const [searchQuery, setSearchQuery] = useAtom(searchQueryAtom);

  useEffect(() => {
    if (screens.md) setIsCollapsed(false);
    else setIsCollapsed(true);
  }, [screens]);

  const handleMenuClick = ({ key }: { key: string }) => {
    if (key === 'search') setIsShowSearchDrawer(true);
    else setIsShowSearchDrawer(false);
  };

  const closeDrawer = () => {
    setIsShowSearchDrawer(false);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        {isCollapsed ? (
          <InstagramOutlined className={styles.icon} />
        ) : (
          <h1>Instagram</h1>
        )}
      </div>
      <Menu
        mode="inline"
        selectedKeys={['home']}
        inlineCollapsed={isCollapsed}
        className={styles.menu}
        items={navigationItems}
        onClick={handleMenuClick}
      />
      <Drawer
        title="ค้นหา"
        placement="left"
        closable={{ 'aria-label': 'Close Button', closeIcon: null }}
        onClose={closeDrawer}
        open={isShowSearchDrawer}
      >
        <Input
          className={styles.searchInput}
          placeholder="ค้นหา"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </Drawer>
    </div>
  );
};

export default LeftSidebar;
