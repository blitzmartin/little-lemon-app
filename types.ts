
export type NavigationProps ={
  navigation: {
    navigate: (screen: string) => void;
  };
}

export type SectionListData = {
  title: string;
  data: MenuItem[];
};

export type MenuItem = {
  id: number;
  title: string;
  price: string;
  category: Category;
};

export enum Category {
  Appetizers = "Appetizers",
  Salads = "Salads",
  Beverages = "Beverages"
}
