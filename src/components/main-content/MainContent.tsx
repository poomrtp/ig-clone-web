import React, { useCallback } from 'react';
import styles from './MainContent.module.css';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useAtomValue } from 'jotai';
import { getPost } from '../../services/post/post.service';
import { searchQueryAtom } from '../../atoms/search.atom';
import Post from '../post/Post';
import PostSkeleton from '../post/PostSkeleton';

const MainContent: React.FC = () => {
  const searchQuery = useAtomValue(searchQueryAtom);
  const limit = 5;
  const {
    data,
    isLoading,
    isSuccess,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['getPost', searchQuery],
    queryFn: ({ pageParam = 1 }) =>
      getPost({
        search: searchQuery,
        page: pageParam,
        limit,
      }),
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < limit) return undefined;
      return allPages.length + 1;
    },
    initialPageParam: 1,
  });

  const posts = data?.pages.flat() || [];

  const lastPostElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (isLoading || isFetchingNextPage) return;
      if (!hasNextPage) return;

      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      });

      if (node) observer.observe(node);
    },
    [isLoading, isFetchingNextPage, hasNextPage, fetchNextPage]
  );

  return (
    <div className={styles.mainContent}>
      {isLoading && <PostSkeleton />}
      {isSuccess && (
        <React.Fragment>
          {posts.length > 0 ? (
            posts.map((post, index) => {
              if (posts.length === index + 1) {
                return (
                  <div key={post.id} ref={lastPostElementRef}>
                    <Post {...post} />
                  </div>
                );
              }
              return <Post key={post.id} {...post} />;
            })
          ) : (
            <div>No posts found</div>
          )}
          {isFetchingNextPage && <PostSkeleton />}
        </React.Fragment>
      )}
    </div>
  );
};

export default MainContent;
