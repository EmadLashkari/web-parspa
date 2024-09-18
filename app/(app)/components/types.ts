export type orderData = {
  concerns: number[];
  created: number;
  feetLength: number;
  feetSize: number;
  id: number;
  isNew: boolean;
  notes: string;
  state: string;
  weight: number;
  insole?: {
    count: number;
  };
}[];
