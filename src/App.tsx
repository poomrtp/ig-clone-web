import React from 'react';
import { ConfigProvider } from 'antd';
import Layout from './components/layout/Layout';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FeedPage from './pages/feed/FeedPage';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgBase: '#000000',
          colorTextBase: '#ffffff',
          colorBorder: '#262626',
        },
      }}
    >
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<FeedPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
