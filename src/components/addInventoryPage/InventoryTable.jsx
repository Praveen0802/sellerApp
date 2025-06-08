import React, { useState } from "react";
import { IconStore } from "@/utils/helperFunctions/iconStore";
import Image from "next/image";
import blueCalendar from "../../../public/blue-calendar.svg";
import blueLocation from "../../../public/blue-location.svg";
import blueClock from "../../../public/blue-clock.svg";
import FormFields from "../formFieldsComponent";

const renderListValue = (icon, text) => {
  return (
    <div className="flex gap-[8px] items-center">
      {icon}
      <p className="text-[12px] font-normal text-white truncate">{text}</p>
    </div>
  );
};

const InventoryTable = ({ listArrayValues }) => {
  const [expandedAccordions, setExpandedAccordions] = useState([]);

  const toggleAccordion = (index) => {
    if (expandedAccordions.includes(index)) {
      setExpandedAccordions(expandedAccordions.filter((i) => i !== index));
    } else {
      setExpandedAccordions([...expandedAccordions, index]);
    }
  };

  const fieldStyle =
    "w-full rounded-md border border-gray-300 p-2 text-gray-700 focus:border-indigo-300 focus:ring-1 focus:ring-indigo-300 focus:outline-none transition-all duration-200";

  const createFormField = (key, value, type = "select") => {
    if (key === "ticketType") {
      return {
        hideLabel: true,
        label: "Ticket Type",
        type: "select",
        searchable: true,
        id: key,
        name: key,
        value: value,
        className: `!py-1 !px-2 ${fieldStyle}`,
        options: [
          { label: "E-ticket", value: "E-ticket" },
          { label: "Paper ticket", value: "Paper ticket" },
          { label: "Mobile ticket", value: "Mobile ticket" },
        ],
      };
    } else if (
      key === "quantity" ||
      key === "maxDisplayedTickets" ||
      key === "row" ||
      key === "firstSeat"
    ) {
      return {
        hideLabel: true,
        label:
          key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1"),
        type: "text",
        id: key,
        name: key,
        value: value,
        className: `!py-1 !px-2 ${fieldStyle}`,
      };
    } else if (key === "splitType") {
      return {
        hideLabel: true,
        label: "Split Type",
        type: "select",
        searchable: true,
        id: key,
        name: key,
        value: value,
        className: `!py-1 !px-2 ${fieldStyle}`,
        options: [
          { label: "Split Type", value: "Split Type" },
          { label: "No Split", value: "No Split" },
          { label: "Free Split", value: "Free Split" },
        ],
      };
    } else if (key === "fanArea") {
      return {
        hideLabel: true,
        label: "Fan Area",
        type: "select",
        searchable: true,
        id: key,
        name: key,
        value: value,
        className: `!py-1 !px-2 ${fieldStyle}`,
        options: [
          {
            label: "Longside Lower Tier Central",
            value: "Longside Lower Tier Central",
          },
          { label: "Longside Upper Tier", value: "Longside Upper Tier" },
          { label: "Behind Goal", value: "Behind Goal" },
        ],
      };
    } else if (key === "sectionBlock") {
      return {
        hideLabel: true,
        label: "Section/Block",
        type: "select",
        searchable: true,
        id: key,
        name: key,
        value: value,
        className: `!py-1 !px-2 ${fieldStyle}`,
        options: [
          { label: "Block 1", value: "Block 1" },
          { label: "Block 2", value: "Block 2" },
          { label: "Block 3", value: "Block 3" },
        ],
      };
    } else if (key === "faceValue" || key === "payoutPrice") {
      return {
        hideLabel: true,
        label:
          key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1"),
        type: "text",
        id: key,
        name: key,
        value: value,
        className: `!py-1 !px-2 ${fieldStyle}`,
        prefix: "£",
      };
    } else if (key === "seatingArrangement") {
      return {
        hideLabel: true,
        label: "Seating Arrangement",
        type: "select",
        searchable: true,
        id: key,
        name: key,
        value: value,
        className: `!py-1 !px-2 ${fieldStyle}`,
        options: [
          { label: "No preference", value: "No preference" },
          { label: "Together", value: "Together" },
          { label: "Separate", value: "Separate" },
        ],
      };
    } else if (key === "ticketsInHand") {
      return {
        hideLabel: true,
        id: key,
        name: key,
        label: "Tickets In Hand",
        type: "checkbox",
        checked: value,
        className: `!py-1 !px-2`,
      };
    } else {
      return {
        hideLabel: true,
        label:
          key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1"),
        type: type,
        id: key,
        name: key,
        value: value,
        className: `!py-1 !px-2 ${fieldStyle}`,
      };
    }
  };

  return (
    <div className="bg-white rounded-md shadow-sm mb-4">
      {listArrayValues.map((item, index) => (
        <div key={index} className="mb-4">
          <div
            className="bg-[#130061] text-white p-4 rounded-t-md flex justify-between items-center cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex flex-col md:flex-row md:gap-4 items-start md:items-center">
              <h3 className="text-lg font-medium">
                {item.accordionTitle.title}
              </h3>
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Image
                    src={blueCalendar}
                    alt="calendar"
                    width={14}
                    height={14}
                    className="invert"
                  />
                  <span className="text-[12px] font-normal text-white truncate">
                    {item.accordionTitle.date}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src={blueClock}
                    alt="clock"
                    width={14}
                    height={14}
                    className="invert"
                  />
                  <span className="text-[12px] font-normal text-white truncate">
                    {item.accordionTitle.time}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src={blueLocation}
                    alt="location"
                    width={14}
                    height={14}
                    className="invert"
                  />
                  <span className="text-[12px] font-normal text-white truncate">
                    {item.accordionTitle.location}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <span>
                {expandedAccordions.includes(index) ? (
                  <IconStore.chevronUp className="size-5" />
                ) : (
                  <IconStore.chevronDown className="size-5" />
                )}
              </span>
            </div>
          </div>

          {expandedAccordions.includes(index) && (
            <div className="border border-t-0 border-[#E0E1EA] rounded-b-md relative">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[1200px]">
                  <thead>
                    <tr className="bg-[#F5F7FA] border-b border-[#E0E1EA]">
                      <th className="w-10 px-2 py-3 sticky left-0 bg-[#F5F7FA] z-10">
                        <input type="checkbox" className="rounded" />
                      </th>
                      {item.tableHeader.map((header, headerIndex) => (
                        <th
                          key={headerIndex}
                          className="px-2 py-3 text-left text-sm font-medium text-[#323A70] whitespace-nowrap"
                        >
                          {header.title}
                        </th>
                      ))}
                      <th className="px-2 py-3 text-left text-sm font-medium text-[#323A70] sticky right-0 bg-[#F5F7FA] z-10">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {item?.tableKey?.map((row, rowIndex) => (
                      <tr
                        key={rowIndex}
                        className="border-b border-[#E0E1EA] hover:bg-gray-50"
                      >
                        <td className="px-2 py-2 sticky left-0 bg-white z-10">
                          <input type="checkbox" className="rounded" />
                        </td>
                        <td className="px-2 py-2 w-full">
                          <div className="w-24">
                            <FormFields
                              formFields={[
                                createFormField("ticketType", row.ticketType),
                              ]}
                            />
                          </div>
                        </td>
                        <td className="px-2 py-2">
                          <FormFields
                            formFields={[
                              createFormField("quantity", row.quantity, "text"),
                            ]}
                          />
                        </td>
                        <td className="px-2 py-2">
                          <div className="w-24">
                            <FormFields
                              formFields={[
                                createFormField("splitType", row.splitType),
                              ]}
                            />
                          </div>
                        </td>
                        <td className="px-2 py-2">
                          <div className="w-32">
                            <FormFields
                              formFields={[
                                createFormField(
                                  "seatingArrangement",
                                  row.seatingArrangement
                                ),
                              ]}
                            />
                          </div>
                        </td>
                        <td className="px-2 py-2">
                          <FormFields
                            formFields={[
                              createFormField(
                                "maxDisplayedTickets",
                                row.maxDisplayedTickets,
                                "text"
                              ),
                            ]}
                          />
                        </td>
                        <td className="px-2 py-2">
                          <div className="w-48">
                            <FormFields
                              formFields={[
                                createFormField("fanArea", row.fanArea),
                              ]}
                            />
                          </div>
                        </td>
                        <td className="px-2 py-2">
                          <FormFields
                            formFields={[
                              createFormField("category", row.category, "text"),
                            ]}
                          />
                        </td>
                        <td className="px-2 py-2">
                          <div className="w-28">
                            <FormFields
                              formFields={[
                                createFormField(
                                  "sectionBlock",
                                  row.sectionBlock
                                ),
                              ]}
                            />
                          </div>
                        </td>
                        <td className="px-2 py-2">
                          <FormFields
                            formFields={[
                              createFormField("row", row.row, "text"),
                            ]}
                          />
                        </td>
                        <td className="px-2 py-2">
                          <FormFields
                            formFields={[
                              createFormField(
                                "firstSeat",
                                row.firstSeat,
                                "text"
                              ),
                            ]}
                          />
                        </td>
                        <td className="px-2 py-2">
                          <div className="w-28">
                            <FormFields
                              formFields={[
                                createFormField(
                                  "faceValue",
                                  row.faceValue,
                                  "text"
                                ),
                              ]}
                            />
                          </div>
                        </td>
                        <td className="px-2 py-2">
                          <div className="w-28">
                            <FormFields
                              formFields={[
                                createFormField(
                                  "payoutPrice",
                                  row.payoutPrice,
                                  "text"
                                ),
                              ]}
                            />
                          </div>
                        </td>
                        <td className="px-2 py-2">
                          <div className="w-24">
                            <FormFields
                              formFields={[
                                createFormField(
                                  "benefits",
                                  row.benefits,
                                  "text"
                                ),
                              ]}
                            />
                          </div>
                        </td>
                        <td className="px-2 py-2">
                          <div className="w-24">
                            <FormFields
                              formFields={[
                                createFormField(
                                  "restrictions",
                                  row.restrictions,
                                  "text"
                                ),
                              ]}
                            />
                          </div>
                        </td>
                        <td className="px-2 py-2">
                          <div className="w-28">
                            <FormFields
                              formFields={[
                                createFormField(
                                  "dateToShip",
                                  row.dateToShip,
                                  "date"
                                ),
                              ]}
                            />
                          </div>
                        </td>
                        <td className="px-2 py-2">
                          <div className="w-24 flex justify-center">
                            <FormFields
                              formFields={[
                                createFormField(
                                  "ticketsInHand",
                                  row.ticketsInHand,
                                  "checkbox"
                                ),
                              ]}
                            />
                          </div>
                        </td>
                        <td className="px-2 py-2">
                          <div className="w-24">
                            <button className="bg-blue-50 text-blue-600 px-3 py-1 rounded text-sm">
                              Upload
                            </button>
                          </div>
                        </td>
                        <td className="px-2 py-2 sticky right-0 bg-white z-10">
                          <div className="flex space-x-2">
                            <button className="text-gray-500 hover:text-blue-600">
                              <IconStore.copy className="size-5" />
                            </button>
                            <button className="text-gray-500 hover:text-blue-600">
                              <IconStore.download className="size-5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default InventoryTable;
