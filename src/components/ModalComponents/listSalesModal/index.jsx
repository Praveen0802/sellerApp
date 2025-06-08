import React, { useState } from "react";
import { Check, ChevronDown, X } from "lucide-react";
import { IconStore } from "@/utils/helperFunctions/iconStore";
import CustomModal from "@/components/commonComponents/customModal";
import CustomSelect from "@/components/commonComponents/customSelect";

const ListingsMarketplace = () => {
  const [showModal, setShowModal] = useState(true);
  const [selectedTab, setSelectedTab] = useState("Listings");
  const [editingRow, setEditingRow] = useState(0); // Fourth row is editable as per image
  const [editPrice, setEditPrice] = useState("50.00");

  // Filter states
  const [sections, setSections] = useState("All Sections");
  const [venues, setVenues] = useState("All Venue Areas");
  const [quantities, setQuantities] = useState("All Quantities");

  const matchDetails = {
    title: "Chelsea vs Arsenal - Premier League",
    date: "Sun, 10 Nov 2024",
    venue: "Stamford Bridge, London, United Kingdom",
  };

  const listingsData = [
    {
      section: "104",
      row: "-",
      quantity: 4,
      category: "Longside Central Lower",
      price: "£ 50.00",
      benefits: "Standing Only",
    },
    {
      section: "104",
      row: "-",
      quantity: 4,
      category: "Lower Tier",
      price: "£ 50.00",
      benefits: "Standing Only",
    },
    {
      section: "104",
      row: "-",
      quantity: 4,
      category: "Longside Central Lower",
      price: "£ 50.00",
      benefits: "Standing Only",
    },
    {
      section: "104",
      row: "-",
      quantity: 4,
      category: "Longside Central Lower",
      price: "£ 50.00",
      benefits: "Standing Only",
    },
    {
      section: "104",
      row: "-",
      quantity: 4,
      category: "Lower Tier",
      price: "£ 50.00",
      benefits: "Standing Only",
    },
    {
      section: "104",
      row: "-",
      quantity: 4,
      category: "Longside Central Lower",
      price: "£ 50.00",
      benefits: "Standing Only",
    },
    {
      section: "104",
      row: "-",
      quantity: 4,
      category: "Lower Tier",
      price: "£ 50.00",
      benefits: "Standing Only",
    },
  ];

  const filterOptions = [
    { value: "all", label: "All Sections" },
    { value: "vip", label: "VIP" },
    { value: "standard", label: "Standard" },
  ];

  const venueOptions = [
    { value: "all", label: "All Venue Areas" },
    { value: "home", label: "Home" },
    { value: "away", label: "Away" },
  ];

  const quantityOptions = [
    { value: "all", label: "All Quantities" },
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "4", label: "4" },
  ];

  const savePrice = () => {
    setEditingRow(null);
  };

  const cancelEdit = () => {
    setEditPrice("50.00");
    setEditingRow(null);
  };

  return (
    <div className="p-4">
      <CustomModal show={showModal} onClose={() => setShowModal(false)}>
        <div className="bg-white w-full max-w-6xl">
          {/* Header with match details */}
          <div className="p-4 flex justify-between items-center">
            <h2 className="text-lg font-medium text-[#323A70]">
              {matchDetails.title}
            </h2>
            <button
              onClick={() => setShowModal(false)}
              className="text-gray-500"
            >
              <IconStore.close />
            </button>
          </div>

          {/* Date and venue info */}
          <div className="px-4 py-2 border-b border-gray-200 flex items-center gap-4">
            <div className="flex items-center gap-2 pr-4 border-r border-gray-200">
              <span className="text-[#323A70]">
                <IconStore.calendar />
              </span>
              <span className="text-sm text-[#323A70]">
                {matchDetails.date}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#323A70]">
                <IconStore.location />
              </span>
              <span className="text-sm text-[#323A70]">
                {matchDetails.venue}
              </span>
            </div>
          </div>

          {/* Tabs and filters */}
          <div className="px-4 py-2 border-b border-gray-200 flex justify-between items-center">
            <div className="flex">
              {["Listings", "Sales"].map((tab) => (
                <button
                  key={tab}
                  className={`px-6 py-2 text-sm cursor-pointer ${
                    selectedTab === tab
                      ? "border-b-2 border-[#130061] text-[#130061] font-medium"
                      : "text-[#323A70]"
                  }`}
                  onClick={() => setSelectedTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-[#323A70]">Filter by:</span>
              <div className="flex gap-2">
                <CustomSelect
                  selectedValue={sections}
                  options={filterOptions}
                  onSelect={setSections}
                  placeholder="All Sections"
                  textSize="text-xs"
                  buttonPadding="px-2 py-1"
                />
                <CustomSelect
                  selectedValue={venues}
                  options={venueOptions}
                  onSelect={setVenues}
                  placeholder="All Venue Areas"
                  textSize="text-xs"
                  buttonPadding="px-2 py-1"
                />
                <CustomSelect
                  selectedValue={quantities}
                  options={quantityOptions}
                  onSelect={setQuantities}
                  placeholder="All Quantities"
                  textSize="text-xs"
                  buttonPadding="px-2 py-1"
                />
              </div>
            </div>
          </div>
          <div className="p-4">
            {/* Table header */}
            <div className="grid grid-cols-6 border-b border-gray-200 bg-white">
              <div className="p-3 text-sm font-medium text-[#323A70]">
                Section/Block
              </div>
              <div className="p-3 text-sm font-medium text-[#323A70]">Row</div>
              <div className="p-3 text-sm font-medium text-[#323A70]">
                Quantity
              </div>
              <div className="p-3 text-sm font-medium text-[#323A70]">
                Category
              </div>
              <div className="p-3 text-sm font-medium text-[#323A70] flex items-center">
                Payout Price <ChevronDown className="ml-1 w-4 h-4" />
              </div>
              <div className="p-3 text-sm font-medium text-[#323A70]">
                Benefits & Restrictions
              </div>
            </div>

            {/* Table rows */}
            {listingsData.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-6 border-b border-gray-200 hover:bg-gray-50"
              >
                <div className="p-3 text-sm">{item.section}</div>
                <div className="p-3 text-sm">{item.row}</div>
                <div className="p-3 text-sm">{item.quantity}</div>
                <div className="p-3 text-sm">{item.category}</div>
                <div className="p-3 text-sm">
                  {editingRow === index ? (
                    <div className="flex items-center">
                      <span className="mr-1">£</span>
                      <input
                        type="text"
                        value={editPrice}
                        onChange={(e) => setEditPrice(e.target.value)}
                        className="border border-blue-500 rounded w-16 px-2 py-1 text-sm"
                      />
                      <div className="flex ml-2">
                        <button
                          onClick={savePrice}
                          className="bg-blue-600 text-white rounded p-1 mr-1"
                        >
                          <Check className="w-4 h-4" />
                        </button>
                        <button
                          onClick={cancelEdit}
                          className="bg-gray-200 text-gray-700 rounded p-1"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <p onClick={() => setEditingRow(index)}>{item.price}</p>
                  )}
                </div>
                <div className="p-3 text-sm flex items-center justify-between">
                  <span>{item.benefits}</span>
                  <button className="text-gray-400">
                    <IconStore.document />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CustomModal>
    </div>
  );
};

export default ListingsMarketplace;
