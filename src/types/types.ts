export type KrajOkresMap = { [krajId: string]: { okresy: string[] } }
export type OkresMesto = { [okresId: string]: { mesta: string[] } }
export type  Member = {
  id: number;
  name: string;
  date: string;
  rank: string;
  age: number;
  address: string;
}