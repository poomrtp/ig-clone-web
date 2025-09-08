import { ConfigProvider } from 'antd';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import PostPage from './pages/post/PostPage';
import { Provider } from 'jotai';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();
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
      <Provider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <div className="App">
              <Routes>
                <Route path="/" element={<PostPage />} />
              </Routes>
            </div>
          </BrowserRouter>
        </QueryClientProvider>
      </Provider>
    </ConfigProvider>
  );
}

export default App;
