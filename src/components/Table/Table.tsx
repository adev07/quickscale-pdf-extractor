import React from 'react';
import { Table as AntTable } from 'antd';

type Props = {}

const Table = (props: any) => {
  // Function to apply zebra striping
  const rowClassName = (record: any, index: number) => {
    return index % 2 === 0 ? 'table-row-even' : 'table-row-odd';
  };

  return (
    <AntTable
      {...props}
      pagination={false}
      rowClassName={rowClassName} // Apply row class name for zebra pattern
      style={{ border: "1px solid #e0e2e7", borderRadius: "8px" }}
    />
  );
}

export default Table;
