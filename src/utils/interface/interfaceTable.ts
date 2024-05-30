import React from "react";

export interface Columns<T, DataType> {
  title: string;
  dataIndex: string;
  key: string;
  sortable?: (a: T, b: T) => boolean;
  render?: (cell: T, record: DataType) => React.ReactNode;
}

export type DataType<T extends object> = T & {
  key: string;
}

export interface User {
  name: string;
  url: string;
  age: number;
  address: string;
  status: string
}

export interface Product {
  price: number;
}
