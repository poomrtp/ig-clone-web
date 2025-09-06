import React from 'react';
import Layout from '../../components/layout/Layout';
import MainContent from '../../components/main-content/MainContent';
import StoryList from '../../components/story-list/StoryList';

const FeedPage: React.FC = () => {
  return (
    <Layout>
      <StoryList />
      <MainContent />
    </Layout>
  );
};

export default FeedPage;
