import { screen } from '@testing-library/react';
import Post from './Post';
import { renderWithClient } from '../../tests/query-client.util';
import userEvent from '@testing-library/user-event';

const postData = {
  id: 1,
  username: 'user1',
  userImageURL: 'https://placehold.co/150/',
  caption: 'lorem ipsum',
  imageUrl: 'https://placehold.co/150/',
  likes: 3,
  isLiked: false,
};

jest.mock('../../services/post/post.service', () => ({
  createLike: jest
    .fn()
    .mockResolvedValue([{ id: '1a', postId: 1, isLike: true }]),
  deleteLike: jest
    .fn()
    .mockResolvedValue([{ id: '1a', postId: 1, isLike: false }]),
}));

test('renders post', () => {
  renderWithClient(<Post {...postData} />);
  expect(screen.getAllByText('user1')).toHaveLength(2);
  const img = screen.getByRole('img', { name: 'lorem ipsum' });
  expect(img).toHaveAttribute('src', 'https://placehold.co/150/');
  const userImg = screen.getByRole('img', { name: 'user profile image' });
  expect(userImg).toHaveAttribute('src', 'https://placehold.co/150/');
  expect(screen.getByText('lorem ipsum')).toBeInTheDocument();
  expect(screen.getByText(`ถูกใจ ${postData.likes} คน`)).toBeInTheDocument();
});

test('renders click like button', async () => {
  const user = userEvent;
  renderWithClient(<Post {...postData} />);

  const likeBtn = screen.getByRole('button', { name: 'like-btn' });
  expect(likeBtn.className).not.toMatch(/active/);
  user.click(likeBtn);
  expect(likeBtn.className).toMatch(/active/);
});

test('click like button then click unlike button', async () => {
  const user = userEvent;
  renderWithClient(<Post {...postData} />);

  const likeBtn = screen.getByRole('button', { name: 'like-btn' });
  expect(likeBtn.className).not.toMatch(/active/);

  user.click(likeBtn);
  expect(likeBtn.className).toMatch(/active/);
  user.click(likeBtn);
  expect(likeBtn.className).not.toMatch(/active/);
});
