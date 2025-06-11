import React from "react";

import canelTicket from "../../../public/cancel-ticke.svg";
import replaced from "../../../public/replaced.svg";
import Pound from "../../../public/dashboard-pound.svg";
import Currency from "../../../public/dashboard-currency.svg";
import Shopping from "../../../public/dashboard-shopping.svg";
import ViewContainer from "./viewContainer";
import Subheader from "./subheader";
import ReportViewContainer from "./reportViewContainer";
import TopSellingEvents from "./topSellingEvents";
import TradeTickets from "./tradeTickets";
import NotificationActivityList from "./notificationActivityList";
import OrderList from "./orderList";
import LatestOrderView from "./latestOrderView";
import LatestBookingTable from "./latestBookingTable";

const DashboardPage = (props) => {
  console.log("props", props);
  const listValues = [
    {
      title: "Sales",
      options: [
        { value: "today", label: "Today" },
        { value: "yesterday", label: "Yesterday" },
      ],
      selectedOption: "today",
      onchange: () => {},
      listValues: [
        { image: Pound, text: "Sales", count: 0 },
        { image: Currency, text: "Tickets", count: 0 },
      ],
    },
    {
      title: "Awaiting Delivery",
      options: [
        { value: "today", label: "Today" },
        { value: "yesterday", label: "Yesterday" },
      ],
      selectedOption: "today",
      onchange: () => {},
      listValues: [
        { image: Pound, text: "Orders", count: 0 },
        { image: Shopping, text: "Tickets", count: 0 },
      ],
    },
  ];

  const reportValues = {
    title: "Reports",
    options: [
      { value: "today", label: "Today" },
      { value: "yesterday", label: "Yesterday" },
    ],
    selectedOption: "today",
    onchange: () => {},
    reports: [
      { image: Pound, text: "Total Revenue", desc: "£21,435.00" },
      { image: Shopping, text: "Total Revenue", desc: "11" },
      { image: Currency, text: "Total Revenue", desc: "229" },
      { image: canelTicket, text: "Total Revenue", desc: "229" },
      { image: replaced, text: "Total Revenue", desc: "229" },
    ],
    tableView: {
      head: ["Total Sales", "Total Tickets", "Total Revenue"],
      body: [
        ["1000", "1000", "£10,537.00"],
        ["1000", "1000", "£10,537.00"],
        ["1000", "1000", "£10,537.00"],
        ["1000", "1000", "£10,537.00"],
        ["1000", "1000", "£10,537.00"],
        ["1000", "1000", "£10,537.00"],
        ["1000", "1000", "£10,537.00"],
      ],
    },
  };

  const sellingEvents = {
    title: "Top Selling Events",
    firstSelect: {
      options: [
        { value: "today", label: "Today" },
        { value: "yesterday", label: "Yesterday" },
      ],
      selectedOption: "today",
      onchange: () => {},
    },
    secondSelect: {
      options: [
        { value: "allCategories", label: "All Categories" },
        { value: "sports", label: "Sports" },
        { value: "concerts", label: "Concerts" },
      ],
      selectedOption: "allCategories",
      onchange: () => {},
    },
    tableViews: {
      title: ["Event Description", "Event Date"],
      body: [
        {
          eventName: "Arsenal FC vs Nottingham Forest FC",
          eventDate: "Sat, 23 Nov 2024",
          ctaName: "Create Listing",
        },
        {
          eventName: "Arsenal FC vs Nottingham Forest FC",
          eventDate: "Sat, 23 Nov 2024",
          ctaName: "Create Listing",
        },
        {
          eventName: "Arsenal FC vs Nottingham Forest FC",
          eventDate: "Sat, 23 Nov 2024",
          ctaName: "Create Listing",
        },
        {
          eventName: "Arsenal FC vs Nottingham Forest FC",
          eventDate: "Sat, 23 Nov 2024",
          ctaName: "Create Listing",
        },
        {
          eventName: "Arsenal FC vs Nottingham Forest FC",
          eventDate: "Sat, 23 Nov 2024",
          ctaName: "Create Listing",
        },
        {
          eventName: "Arsenal FC vs Nottingham Forest FC",
          eventDate: "Sat, 23 Nov 2024",
          ctaName: "Create Listing",
        },
        {
          eventName: "Arsenal FC vs Nottingham Forest FC",
          eventDate: "Sat, 23 Nov 2024",
          ctaName: "Create Listing",
        },
        {
          eventName: "Arsenal FC vs Nottingham Forest FC",
          eventDate: "Sat, 23 Nov 2024",
          ctaName: "Create Listing",
        },
        {
          eventName: "Arsenal FC vs Nottingham Forest FC",
          eventDate: "Sat, 23 Nov 2024",
          ctaName: "Create Listing",
        },
        {
          eventName: "Arsenal FC vs Nottingham Forest FC",
          eventDate: "Sat, 23 Nov 2024",
          ctaName: "Create Listing",
        },
      ],
    },
  };

  return (
    <div className="flex flex-col h-full">
      <Subheader />

      <div className="overflow-auto p-4 md:p-6 w-full h-full flex flex-col gap-4 md:gap-5 bg-[#F5F7FA]">
        <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
          <div className="w-full lg:w-1/2 flex flex-col gap-4 md:gap-6">
            <div className="flex flex-col sm:flex-row gap-4">
              {listValues?.map((listItem, listIndex) => {
                return (
                  <ViewContainer
                    key={listIndex}
                    title={listItem?.title}
                    options={listItem?.options}
                    listValues={listItem?.listValues}
                    onChange={listItem?.onchange}
                    selectedOption={listItem?.selectedOption}
                  />
                );
              })}
            </div>
            <ReportViewContainer reportValues={reportValues} />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col">
            <TopSellingEvents sellingEvents={sellingEvents} />
          </div>
        </div>
        <TradeTickets />
        <NotificationActivityList />
       
      </div>
    </div>
  );
};

export default DashboardPage;
