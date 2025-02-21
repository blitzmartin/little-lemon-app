import { User } from '../context/AuthContext';

export const generateFakeToken = () => {
  return Math.random().toString(36).substring(2);
};

export const getUserInitials = (user: User | null): string => {
  if(!user) return 'AA';
 return user.firstName[0] + user.lastName[0]
};
