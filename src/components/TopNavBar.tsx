import React from 'react';
import { Layout, Menu, Dropdown, Avatar } from 'antd';
import { 
  BellOutlined, 
  UserOutlined,
  DownOutlined 
} from '@ant-design/icons';
import './TopNavBar.css';

const { Header } = Layout;

const TopNavBar: React.FC = () => {
  const menuItems = [
    { key: 'file', label: '文件' },
    { key: 'edit', label: '编辑' },
    { key: 'place', label: '放置' },
    { key: 'format', label: '格式' },
    { key: 'view', label: '视图' },
    { key: 'design', label: '设计' },
    { key: 'route', label: '布线' },
    { key: 'tools', label: '工具' },
    { key: 'fabrication', label: '制造' },
    { key: 'advanced', label: '高级' },
    { key: 'setting', label: '设置' },
    { key: 'help', label: '帮助' },
  ];

  const userMenu = (
    <Menu>
      <Menu.Item key="profile">个人主页</Menu.Item>
      <Menu.Item key="settings">账户设置</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout">退出登录</Menu.Item>
    </Menu>
  );

  return (
    <Header className="top-navbar">
      {/* Logo */}
      <div className="logo-container">
        <svg width="120" height="30" viewBox="0 0 1790 300" className="logo">
          <path fill="#5588FF" d="M345,83.9C325.8,33.4,277.4,0,223.4,0c-41.3,0-80.2,19.7-104.7,53c-4.9-0.7-9.8-1-14.8-1C46.5,52,0,98.5,0,155.9c0,25.8,9.6,50.6,26.8,69.7c13.7,15,31.4,25.7,51.1,30.8c11.2,33.5,47.4,51.5,80.9,40.3c26.1-8.7,43.6-33.1,43.6-60.6c0-2-0.1-4.2-0.3-6.2l89.7-47.1l-19.7-34l-85.7,45.1c-23.2-26.6-63.6-29.3-90.2-6.1c-8.2,7.2-14.5,16.4-18.1,26.7c-32.4-14.3-47-52.2-32.7-84.5s52.2-47,84.5-32.7c2.7,1.2,5.4,2.6,7.9,4.2c15.6-47.3,66.5-72.9,113.8-57.3c33.4,11,57.4,40.5,61.3,75.5c1.6-0.2,3.2-0.2,4.8-0.2c27.7-1,51,20.7,51.9,48.4c1,27.4-20.2,50.5-47.5,51.9h-28.8c-1.3-0.3-2.6-0.4-3.9-0.4c-11-0.5-20.4,8.1-20.9,19.1s8.1,20.4,19.1,20.9v0.2h37.7c49.5-4,86.4-47.4,82.4-97C404.9,126,380,94.9,345,83.9z"/>
        </svg>
      </div>

      {/* 模式标识 */}
      <div className="mode-logo">标准</div>

      {/* 菜单栏 */}
      <div className="menu-container">
        <Menu mode="horizontal" className="top-menu" items={menuItems} />
      </div>

      {/* 右侧用户区域 */}
      <div className="user-area">
        <div className="notification-bell">
          <BellOutlined />
          <span className="notification-badge" />
        </div>
        
        <Dropdown overlay={userMenu} trigger={['click']}>
          <div className="user-info">
            <Avatar icon={<UserOutlined />} size="small" />
            <span className="username">登录</span>
            <DownOutlined />
          </div>
        </Dropdown>
      </div>
    </Header>
  );
};

export default TopNavBar;