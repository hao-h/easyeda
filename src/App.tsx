import React, { useState } from 'react';
import { Layout } from 'antd';
import TopNavBar from './components/TopNavBar';
import LeftPanel from './components/LeftPanel';
import EditorArea from './components/EditorArea';
import RightPanel from './components/RightPanel';
import BottomToolbar from './components/BottomToolbar';
import './App.css';

const { Content } = Layout;

const App: React.FC = () => {
  const [leftPanelWidth, setLeftPanelWidth] = useState(200);
  const [rightPanelWidth, setRightPanelWidth] = useState(159);
  const [showLeftPanel, setShowLeftPanel] = useState(true);
  const [showRightPanel, setShowRightPanel] = useState(true);

  return (
    <Layout className="app-container">
      {/* 顶部导航栏 */}
      <TopNavBar />
      
      <Layout className="main-layout">
        {/* 左侧面板 */}
        {showLeftPanel && (
          <LeftPanel 
            width={leftPanelWidth}
            onResize={setLeftPanelWidth}
          />
        )}
        
        {/* 左侧切换按钮 */}
        <div 
          className="layout-toggler left"
          style={{ left: showLeftPanel ? leftPanelWidth : 0 }}
          onClick={() => setShowLeftPanel(!showLeftPanel)}
        >
          <div className="toggle" title="打开/关闭左侧栏" />
        </div>

        {/* 中间编辑区域 */}
        <Content className="editor-content">
          <EditorArea />
          <BottomToolbar />
        </Content>

        {/* 右侧切换按钮 */}
        <div 
          className="layout-toggler right"
          style={{ right: showRightPanel ? rightPanelWidth : 0 }}
          onClick={() => setShowRightPanel(!showRightPanel)}
        >
          <div className="toggle" title="打开/关闭右侧栏" />
        </div>

        {/* 右侧属性面板 */}
        {showRightPanel && (
          <RightPanel 
            width={rightPanelWidth}
            onResize={setRightPanelWidth}
          />
        )}
      </Layout>
    </Layout>
  );
};

export default App;