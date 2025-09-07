import { Button, Input, Layout, Space } from 'antd';
import styles from './Header.module.css';
import { useAtom } from 'jotai';
import { searchQueryAtom } from '../../../atoms/search.atom';
import { HeartOutlined } from '@ant-design/icons';

const { Header } = Layout;
const HeaderSm: React.FC = () => {
  const [searchQuery, setSearchQuery] = useAtom(searchQueryAtom);
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  return (
    <Header className={styles.header}>
      <h1>Instagram</h1>
      <Space size="small">
        <Input
          className="searchInput"
          placeholder="ค้นหา"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <Button type="text" icon={<HeartOutlined size={32} />} />
      </Space>
    </Header>
  );
};

export default HeaderSm;
