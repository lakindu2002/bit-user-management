import React from 'react';
import { render } from '@testing-library/react';
import { Table } from './table';

describe('Table component', () => {
  const headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'location', label: 'Location' },
  ];

  const items = [
    { name: 'John Doe', age: '30', location: 'New York' },
    { name: 'Jane Smith', age: '25', location: 'Los Angeles' },
  ];

  it('renders headers and items correctly', () => {
    const { getByText } = render(<Table headers={headers} items={items} />);

    headers.forEach(header => {
      expect(getByText(header.label)).toBeInTheDocument();
    });

    items.forEach(item => {
      Object.values(item).forEach(value => {
        expect(getByText(value)).toBeInTheDocument();
      });
    });
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Table headers={headers} items={items} />);
    expect(asFragment()).toMatchSnapshot();
  });
});