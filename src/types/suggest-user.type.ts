import { Profile } from './profile.type';

export type SuggestUserQuery = {
  limit?: number;
};

export type SuggestUser = {
  followers: string[];
} & Profile;
