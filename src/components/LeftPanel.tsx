import React, { useState } from 'react';
import { Tabs } from 'antd';
import { 
  ProjectOutlined,
  UnorderedListOutlined,
  BookOutlined,
  AppstoreOutlined,
  ShoppingOutlined,
  ToolOutlined,
  QuestionCircleOutlined,
  DeleteOutlined 
} from '@ant-design/icons';
import './LeftPanel.css';

interface LeftPanelProps {
  width: number;
  onResize: (width: number) => void;
}

const LeftPanel: React.FC<LeftPanelProps> = ({ width }) => {
  const [activeTab, setActiveTab] = useState('libs');

  const tabItems = [
    {
      key: 'project',
      label: <><ProjectOutlined /> 工程</>,
      children: <div className="tab-content">项目管理器内容</div>
    },
    {
      key: 'design',
      label: <><UnorderedListOutlined /> 设计管理器</>,
      children: <div className="tab-content">设计管理器内容</div>
    },
    {
      key: 'libs',
      label: <><BookOutlined /> 常用库</>,
      children: <div className="tab-content">常用库内容</div>
    },
    {
      key: 'components',
      label: <><AppstoreOutlined /> 元件库</>,
      children: <div className="tab-content">元件库内容</div>
    },
    {
      key: 'lcsc',
      label: <><ShoppingOutlined /> 立创商城</>,
      children: <div className="tab-content">立创商城内容</div>
    },
    {
      key: 'jlc',
      label: <><ToolOutlined /> 嘉立创</>,
      children: <div className="tab-content">嘉立创内容</div>
    },
  ];

  return (
    <div className="left-panel" style={{ width }}>
      <Tabs
        activeKey={activeTab}
        onChange={setActiveTab}
        tabPosition="left"
        className="left-panel-tabs"
        items={tabItems}
      />
      
      {/* 底部固定按钮 */}
      <div className="left-panel-bottom">
        <div className="bottom-tab" title="技术支持">
          <QuestionCircleOutlined />
          <span>技术支持</span>
        </div>
        <div className="bottom-tab" title="回收站">
          <DeleteOutlined />
          <span>回收站</span>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;