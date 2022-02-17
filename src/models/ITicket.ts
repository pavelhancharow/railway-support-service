export interface ITicket {
  train: string;
  trainType: string;
  tariff: number;
  from: string;
  to: string;
  stations: string[];
  price: number;
  distance: string;
  duration: string;
}
