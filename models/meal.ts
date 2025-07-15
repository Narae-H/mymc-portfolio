export interface MealType {
  id: string;
  title: string;
  url: string;
  items: {
    id: string;
    title: string;
    url: string;
  }[];
}


