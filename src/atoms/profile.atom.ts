import { atom } from 'jotai';
import { Profile } from '../types/profile.type';

export const profileAtom = atom<Profile>({
  id: '',
  username: '',
  userImageURL: '',
});

export const isLoadingProfileAtom = atom<boolean>(false);
