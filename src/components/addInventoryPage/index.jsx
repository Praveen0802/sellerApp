import React from "react";
import blueCalendar from "../../../public/blue-calendar.svg";
import blueLocation from "../../../public/blue-location.svg";
import blueClock from "../../../public/blue-clock.svg";
import Image from "next/image";
import { IconStore } from "@/utils/helperFunctions/iconStore";
import AddViewForm from "./AddViewForm";
import Button from "../commonComponents/button";
import InventoryTable from "./InventoryTable"; // Import the new component

const renderListValue = (icon, text) => {
  return (
    <div className="flex gap-[8px] items-center">
      {icon}
      <p className="text-[12px] font-normal text-[#323A70] truncate">{text}</p>
    </div>
  );
};

const AddInventoryPage = () => {
  const selectedItem = [
    {
      matchName: "Manchester United FC vs AFC Bournemouth",
      mathDate: "Sun, 10 Nov 2024",
      matchTime: "16:30 ",
    },
    {
      matchName: "Manchester United FC vs AFC Bournemouth",
      mathDate: "Sun, 10 Nov 2024",
      matchTime: "16:30 ",
    },
  ];

  const listArrayValues = [
    {
      accordionTitle: {
        title: "Chelsea vs Arsenal - Premier League",
        date: "Sun, 10 Nov 2024",
        time: "16:30",
        location: "Stamford Bridge, London, United Kingdom ",
      },
      tableHeader: [
        { title: "Ticket Type", key: "ticketType" },
        { title: "Quantity", key: "quantity" },
        { title: "Split Type", key: "splitType" },
        {
          title: "Seating Arrangement",
          key: "seatingArrangement",
        },
        {
          title: "Max Displayed Tickets",
          key: "maxDisplayedTickets",
        },
        { title: "Fan Area", key: "fanArea" },
        { title: "Category", key: "category" },
        { title: "Section/Block", key: "sectionBlock" },
        { title: "Row", key: "row" },
        { title: "First Seat", key: "firstSeat" },
        { title: "Face Value", key: "faceValue" },
        { title: "Payout Price", key: "payoutPrice" },
        { title: "Benefits", key: "benifits" },
        { title: "Restrictions", key: "restrictions" },
        { title: "Date to Ship", key: "dateToShip" },
        { title: "Tickets In Hand", key: "ticketsInHand" },
        { title: "Upload Tickets", key: "uploadTickets" },
      ],
      tableKey: [
        {
          id: 1,
          ticketType: "E-ticket",
          quantity: "5",
          splitType: "Split Type",
          seatingArrangement: "No preference",
          maxDisplayedTickets: "5",
          fanArea: "Longside Lower Tier Central",
          category: "",
          sectionBlock: "Block 1",
          row: "5",
          firstSeat: "3",
          faceValue: "90,000.00",
          payoutPrice: "90,000.00",
          benefits: "",
          restrictions: "",
          dateToShip: "",
          ticketsInHand: true,
          uploadTickets: "",
        },
        {
          id: 2,
          ticketType: "E-ticket",
          quantity: "5",
          splitType: "Split Type",
          seatingArrangement: "No preference",
          maxDisplayedTickets: "5",
          fanArea: "Longside Lower Tier Central",
          category: "",
          sectionBlock: "Block 1",
          row: "5",
          firstSeat: "3",
          faceValue: "90,000.00",
          payoutPrice: "90,000.00",
          benefits: "",
          restrictions: "",
          dateToShip: "",
          ticketsInHand: true,
          uploadTickets: "",
        },
      ],
    },
    {
      accordionTitle: {
        title: "Manchester United FC vs AFC Bournemouth",
        date: "Sun, 10 Nov 2024",
        time: "16:30",
        location: "Stamford Bridge, London, United Kingdom ",
      },
      tableHeader: [
        { title: "Ticket Type", key: "ticketType" },
        { title: "Quantity", key: "quantity" },
        { title: "Split Type", key: "splitType" },
        {
          title: "Seating Arrangement",
          key: "seatingArrangement",
        },
        {
          title: "Max Displayed Tickets",
          key: "maxDisplayedTickets",
        },
        { title: "Fan Area", key: "fanArea" },
        { title: "Category", key: "category" },
        { title: "Section/Block", key: "sectionBlock" },
        { title: "Row", key: "row" },
        { title: "First Seat", key: "firstSeat" },
        { title: "Face Value", key: "faceValue" },
        { title: "Payout Price", key: "payoutPrice" },
        { title: "Benefits", key: "benifits" },
        { title: "Restrictions", key: "restrictions" },
        { title: "Date to Ship", key: "dateToShip" },
        { title: "Tickets In Hand", key: "ticketsInHand" },
        { title: "Upload Tickets", key: "uploadTickets" },
      ],
      tableKey: [
        {
          id: 1,
          ticketType: "E-ticket",
          quantity: "5",
          splitType: "Split Type",
          seatingArrangement: "No preference",
          maxDisplayedTickets: "5",
          fanArea: "Longside Lower Tier Central",
          category: "",
          sectionBlock: "Block 1",
          row: "5",
          firstSeat: "3",
          faceValue: "90,000.00",
          payoutPrice: "90,000.00",
          benefits: "",
          restrictions: "",
          dateToShip: "",
          ticketsInHand: true,
          uploadTickets: "",
        },
        {
          id: 2,
          ticketType: "E-ticket",
          quantity: "5",
          splitType: "Split Type",
          seatingArrangement: "No preference",
          maxDisplayedTickets: "5",
          fanArea: "Longside Lower Tier Central",
          category: "",
          sectionBlock: "Block 1",
          row: "5",
          firstSeat: "3",
          faceValue: "90,000.00",
          payoutPrice: "90,000.00",
          benefits: "",
          restrictions: "",
          dateToShip: "",
          ticketsInHand: true,
          uploadTickets: "",
        },
      ],
    },
    {
      accordionTitle: {
        title: "Arsenal vs AFC Bournemouth",
        date: "Sun, 10 Nov 2024",
        time: "16:30",
        location: "Stamford Bridge, London, United Kingdom ",
      },
      tableHeader: [
        { title: "Ticket Type", key: "ticketType" },
        { title: "Quantity", key: "quantity" },
        { title: "Split Type", key: "splitType" },
        {
          title: "Seating Arrangement",
          key: "seatingArrangement",
        },
        {
          title: "Max Displayed Tickets",
          key: "maxDisplayedTickets",
        },
        { title: "Fan Area", key: "fanArea" },
        { title: "Category", key: "category" },
        { title: "Section/Block", key: "sectionBlock" },
        { title: "Row", key: "row" },
        { title: "First Seat", key: "firstSeat" },
        { title: "Face Value", key: "faceValue" },
        { title: "Payout Price", key: "payoutPrice" },
        { title: "Benefits", key: "benifits" },
        { title: "Restrictions", key: "restrictions" },
        { title: "Date to Ship", key: "dateToShip" },
        { title: "Tickets In Hand", key: "ticketsInHand" },
        { title: "Upload Tickets", key: "uploadTickets" },
      ],
      tableKey: [
        {
          id: 1,
          ticketType: "E-ticket",
          quantity: "5",
          splitType: "Split Type",
          seatingArrangement: "No preference",
          maxDisplayedTickets: "5",
          fanArea: "Longside Lower Tier Central",
          category: "",
          sectionBlock: "Block 1",
          row: "5",
          firstSeat: "3",
          faceValue: "90,000.00",
          payoutPrice: "90,000.00",
          benefits: "",
          restrictions: "",
          dateToShip: "",
          ticketsInHand: true,
          uploadTickets: "",
        },
        {
          id: 2,
          ticketType: "E-ticket",
          quantity: "5",
          splitType: "Split Type",
          seatingArrangement: "No preference",
          maxDisplayedTickets: "5",
          fanArea: "Longside Lower Tier Central",
          category: "",
          sectionBlock: "Block 1",
          row: "5",
          firstSeat: "3",
          faceValue: "90,000.00",
          payoutPrice: "90,000.00",
          benefits: "",
          restrictions: "",
          dateToShip: "",
          ticketsInHand: true,
          uploadTickets: "",
        },
      ],
    },
  ];
  return (
    <div className="bg-[#F5F7FA]">
      <div className="bg-white">
        <div className="border-b-[1px] p-4 border-[#E0E1EA] flex flex-col gap-2">
          <div className=" w-full md:w-auto  flex items-center justify-between ">
            {renderListValue(
              <Image
                src={blueLocation}
                alt="location"
                width={14}
                height={14}
              />,
              "Stamford Bridge, London, United Kingdom "
            )}
            <p className="text-[12px] font-semibold text-[#0137D5] cursor-pointer hover:underline">
              View Map
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            {selectedItem.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-1 w-fit border-[1px] border-[#DADBE5] px-2 py-1 rounded-md"
              >
                <IconStore.close className="size-4 cursor-pointer" />
                <p className="text-[#323A70] text-[14px] font-medium">
                  {item.matchName}
                </p>
                {renderListValue(
                  <Image
                    src={blueCalendar}
                    alt="location"
                    width={14}
                    height={14}
                  />,
                  item.mathDate
                )}
                {renderListValue(
                  <Image
                    src={blueClock}
                    alt="location"
                    width={14}
                    height={14}
                  />,
                  item.matchTime
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="p-4 border-b-[1px] border-[#E0E1EA]">
          <AddViewForm />
        </div>
        <div className="flex justify-end px-4 py-2 border-b-[1px] border-[#E0E1EA]">
          <Button
            type="blueType"
            classNames={{
              root: "px-2 md:px-3 py-1.5 md:py-2",
              label_: "text-xs md:text-sm font-medium",
            }}
            label="+ Add Listings"
          />
        </div>
      </div>

      {/* Add the new InventoryTable component here */}
      <div className="p-4">
        <InventoryTable listArrayValues={listArrayValues} />
      </div>
    </div>
  );
};

export default AddInventoryPage;
