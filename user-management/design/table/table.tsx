import React from 'react';

export type TableProps = {
  headers: { key: string; label: string }[];
  items: Record<string, string>[];
};

const tableHeaderStyle: React.CSSProperties = {
  backgroundColor: '#f2f2f2',
  padding: '8px',
  textAlign: 'left',
};

const tableCellStyle: React.CSSProperties = {
  border: '1px solid #dddddd',
  padding: '8px',
};

export function Table({ headers, items }: TableProps) {
  return (
    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr>
          {headers.map(({ key, label }, index) => (
            <th key={key} style={tableHeaderStyle}>
              {label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {items.map((item, rowIndex) => (
          <tr key={rowIndex}>
            {headers.map(({ key }) => (
              <td key={key} style={tableCellStyle}>
                {item[key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
