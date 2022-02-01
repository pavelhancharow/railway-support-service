export interface IRoute {
  id?: number;
  from: string;
  to: {
    city: string;
    distance: number;
    price: number;
  }[];
}
