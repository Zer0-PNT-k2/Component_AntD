import React, { useState } from "react";
import { Columns, DataType } from "../../utils/interface/interfaceTable";
import "./Table.css";

const Table = <T extends object>(prop: {
  columns: Columns<T, DataType<T>>[];
  dataSource: DataType<T>[];
}) => {
  const { columns, dataSource } = prop;

  const [source, setSource] = useState<DataType<T>[]>(dataSource);

  function handleSort(key: string) {
    const column = columns.find((col) => col.key === key);
    if (column && column.sortable) {
      const sortedData = [...source].sort((a, b) =>
        column.sortable!(a, b) ? 1 : -1
      );
      setSource(sortedData);
    }
  }

  return (
    <form action="" className="tableFixHead">
      <table>
        <thead>
          <tr>
            {columns.map((column) => {
              return (
                <th key={column.key} onClick={() => handleSort(column.key)}>
                  {column.title}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="tbody-wrapper">
          {source.map((data) => {
            return (
              <tr key={data.key}>
                {columns.map((column) => {
                  const value = data[column.dataIndex as keyof typeof data];
                  return column.render ? (
                    <td key={column.key}>
                      {column.render(value as T, data as DataType<T>)}
                    </td>
                  ) : (
                    <td key={column.key}>{`${value}`}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </form>
  );
};

export default Table;
