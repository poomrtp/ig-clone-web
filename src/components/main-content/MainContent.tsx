import React, { useCallback } from 'react';
import styles from './MainContent.module.css';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useAtomValue } from 'jotai';
import { getPost } from '../../services/post/post.service';
import { searchQueryAtom } from '../../atoms/search.atom';
import Post from '../post/Post';
import PostSkeleton from '../post/PostSkeleton';
import { useDebounce } from '../../hooks/debouce';

const MainContent: React.FC = () => {
  const searchQuery = useAtomValue(searchQueryAtom);
  const debouncedSearch = useDebounce(searchQuery, 1000);
  const limit = 5;
  const {
    data,
    isLoading,
    isSuccess,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['getPost', debouncedSearch],
    queryFn: ({ pageParam = 1 }) =>
      getPost({
        search: debouncedSearch,
        page: pageParam,
        limit,
      }),
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < limit) return undefined;
      return allPages.length + 1;
    },
    initialPageParam: 1,
    staleTime: 60 * 1000,
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
