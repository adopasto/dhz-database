import { GridColDef } from '@mui/x-data-grid';
import { Member } from "./types/types";
export const validRoutes = [
  '/zakladnyPrehlad',
  '/login',
  '/technika',
  '/vybor',
  '/zoznamClenov',
  '/profil',
  '/dhzo',
]

export const mockedMemberRow: Member[] = [
  // rename date - to clen od:
  { id: 1, name: 'John Doe', date: '2022-01-01', rank: 'Captain', age: 30, address: '123 Main St' },
  { id: 2, name: 'Jane Smith', date: '2022-02-15', rank: 'Sergeant', age: 28, address: '456 Oak Ave' },
  { id: 3, name: 'Bob Johnson', date: '2022-03-20', rank: 'Lieutenant', age: 35, address: '789 Pine St' },
  { id: 4, name: 'Alice Williams', date: '2022-04-10', rank: 'Major', age: 42, address: '101 Elm St' },
  { id: 5, name: 'Charlie Brown', date: '2022-05-05', rank: 'Colonel', age: 50, address: '202 Maple Ave' },
  { id: 6, name: 'Eva Davis', date: '2022-06-18', rank: 'Private', age: 22, address: '303 Cedar St' },
  { id: 7, name: 'Frank Miller', date: '2022-07-02', rank: 'General', age: 55, address: '404 Birch Ave' },
  { id: 8, name: 'Grace Wilson', date: '2022-08-12', rank: 'Sergeant', age: 29, address: '505 Spruce St' },
  { id: 9, name: 'Henry Taylor', date: '2022-09-25', rank: 'Lieutenant', age: 38, address: '606 Fir Ave' },
  { id: 10, name: 'Isabel Moore', date: '2022-10-30', rank: 'Captain', age: 31, address: '707 Pine St' },
  { id: 11, name: 'Jack Robinson', date: '2022-11-15', rank: 'Major', age: 45, address: '808 Oak Ave' },
  { id: 12, name: 'Katie Lee', date: '2022-12-05', rank: 'Colonel', age: 48, address: '909 Cedar St' },
];

export const mockedMemberColumns: GridColDef[] = [
  { field: 'id', headerName: 'ID', flex: 1 },
  { field: 'name', headerName: 'Name', flex: 1, sortable: true },
  { field: 'date', headerName: 'Date', flex: 1, sortable: true },
  { field: 'rank', headerName: 'Rank', flex: 1 },
  { field: 'age', headerName: 'Age', flex: 1 },
  { field: 'address', headerName: 'Address', flex: 1 },
];