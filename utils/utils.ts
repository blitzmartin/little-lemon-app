import { useEffect, useRef } from 'react';
import { User } from '../context/AuthContext';
import { MenuItem, SectionListData } from '../types';

export const generateFakeToken = () => {
  return Math.random().toString(36).substring(2);
};

export const getUserInitials = (user: User | null): string => {
  if(!user) return 'AA';
 return user.firstName[0] + user.lastName[0]
};

export const getSectionListData = (menuItems: MenuItem[]): SectionListData[] => {
  const categories = [...new Set(menuItems.map((item) => item.category))];
  return categories.map((categoryTitle) => ({
    title: typeof categoryTitle === 'string' ? categoryTitle : 'Unknown',
    data: menuItems.filter((item) => item.category === categoryTitle),
  }));
};


export function useUpdateEffect(effect: () => void | (() => void), dependencies: React.DependencyList = []) {
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      return effect();
    }
  }, dependencies);
}
