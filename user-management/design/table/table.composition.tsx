import React from 'react';
import { Table } from './table';

const tableHeaders = [
  { key: 'name', label: 'Name' },
  { key: 'age', label: 'Age' },
  { key: 'location', label: 'Location' },
];

const tableItems: Record<string, string>[] = [
  { name: 'John Doe', age: '30', location: 'New York' },
  { name: 'Jane Smith', age: '25', location: 'Los Angeles' },
  { name: 'Michael Johnson', age: '28', location: 'Chicago' },
];

export const BasicTable = () => {
  return (
    <div>
      <h1>Dynamic Table Example</h1>
      <Table headers={tableHeaders} items={tableItems} />
    </div>
  );
}
