import React, { useState } from "react";

const EventsTable = ({ events, headers }) => {
  const [selectedRows, setSelectedRows] = useState([]);

  const handleRowSelection = (index) => {
    if (selectedRows.includes(index)) {
      setSelectedRows(selectedRows.filter((rowIndex) => rowIndex !== index));
    } else {
      setSelectedRows([...selectedRows, index]);
    }
  };

  const handleSelectAll = () => {
    if (selectedRows.length === events.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(events.map((_, index) => index));
    }
  };

  return (
    <div className="w-full h-full">
      <table className="w-full border-collapse">
        <thead className="sticky top-0 bg-white z-10">
          <tr className="border-b border-[#DADBE5]">
            <th className="px-2 py-2 border-r-[1px] cursor-pointer border-[#DADBE5] w-10">
              <input
                type="checkbox"
                onChange={handleSelectAll}
                checked={
                  selectedRows.length === events.length && events.length > 0
                }
                className="h-3.5 w-3.5"
              />
            </th>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-4 py-2 text-left text-[#323A70] font-medium text-sm whitespace-nowrap"
              >
                {header.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="overflow-y-auto">
          {events.map((event, rowIndex) => (
            <tr
              key={rowIndex}
              onClick={() => handleRowSelection(rowIndex)}
              className={`border-b border-[#DADBE5] hover:bg-[#F5F7FA] cursor-pointer ${
                selectedRows.includes(rowIndex) ? "bg-[#F2F5FD]" : ""
              }`}
            >
              <td className="px-2 py-2 border-r-[1px] text-center border-[#DADBE5]">
                <input
                  type="checkbox"
                  onChange={() => handleRowSelection(rowIndex)}
                  checked={selectedRows.includes(rowIndex)}
                  className="h-3.5 w-3.5"
                />
              </td>
              {headers.map((header, colIndex) => (
                <td
                  key={colIndex}
                  className="px-4 py-2 text-[12px] font-normal text-sm"
                >
                  {event[header.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventsTable;