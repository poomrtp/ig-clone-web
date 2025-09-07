import { Layout, Menu } from 'antd';
import styles from './Footer.module.css';
import {
  HomeOutlined,
  CompassOutlined,
  PlayCircleOutlined,
  MessageOutlined,
  PlusOutlined,
  UserOutlined,
  HomeFilled,
  CompassFilled,
  PlayCircleFilled,
  MessageFilled,
  PlusCircleFilled,
} from '@ant-design/icons';
import { useState } from 'react';

const { Footer } = Layout;
const FooterSm: React.FC = () => {
  const [selected, setSelected] = useState('home');
  const navigationItems = [
    {
      key: 'home',
      label: selected === 'home' ? <HomeFilled /> : <HomeOutlined />,
    },
    {
      key: 'explore',
      label: selected === 'explore' ? <CompassFilled /> : <CompassOutlined />,
    },
    {
      key: 'reels',
      label:
        selected === 'reels' ? <PlayCircleFilled /> : <PlayCircleOutlined />,
    },
    {
      key: 'messages',
      label: selected === 'messages' ? <MessageFilled /> : <MessageOutlined />,
    },
    {
      key: 'create',
      label: selected === 'create' ? <PlusCircleFilled /> : <PlusOutlined />,
    },
    {
      key: 'profile',
      label: selected === 'profile' ? <UserOutlined /> : <UserOutlined />,
    },
  ];

  const handleMenuClick = ({ key }: { key: string }) => {
    setSelected(key);
  };

  return (
    <Footer className={styles.footer}>
      <Menu
        mode="horizontal"
        selectedKeys={[selected]}
        className={styles.menu}
        items={navigationItems}
        onSelect={handleMenuClick}
      />
    </Footer>
  );
};

export default FooterSm;
