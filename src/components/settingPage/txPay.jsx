import { IconStore } from "@/utils/helperFunctions/iconStore";
import Button from "../commonComponents/button";
import AccountView from "./components/accountView";
import ListView from "./components/listView";

const TXPay = () => {
  const overviewList = [
    {
      title: "£988.32",
      desc: "Available",
      icon: <IconStore.circleTick className="stroke-green-600 size-5" />,
    },
    {
      title: "£7,400",
      desc: "Pending",
      icon: <IconStore.clock className="stroke-black size-4" />,
    },
    {
      title: "£38,725",
      desc: "Total revenue",
    },
  ];

  const accounts = [
    {
      type: "Funding account",
      fields: [
        {
          title: "First Abu Dhabi Bank",
          icon: <IconStore.pencilEdit className="size-4 text-[#42007D]" />,
        },
        {
          label: "Account holder",
          value: "TICKET SERVICES DMCC",
          icon: <IconStore.squares className="size-4 text-[#42007D]" />,
        },
        {
          label: "IBAN",
          value: "AE590351191324772071004",
          icon: <IconStore.squares className="size-4 text-[#42007D]" />,
        },
      ],
    },
    {
      type: "Withdrawal account",
      fields: [
        {
          title: "First Abu Dhabi Bank",
          icon: <IconStore.pencilEdit className="size-4 text-[#42007D]" />,
        },
        {
          label: "Account holder",
          value: "TICKET SERVICES DMCC",
          icon: <IconStore.squares className="size-4 text-[#42007D]" />,
        },
        {
          label: "Card details",
          value: "AE590351191324772071004",
          icon: <IconStore.squares className="size-4 text-[#42007D]" />,
        },
      ],
    },
  ];

  return (
    <div className="bg-white border-l-[1px] border-[#DADBE5] h-full">
      <div className="bg-[#F1F0FE] p-5">
        <p className="text-[18px] font-medium">TX Pay</p>
      </div>

      <div className="p-5 flex flex-col gap-5 border-b border-b-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-end gap-3 sm:gap-0 sm:justify-between">
          <p className="text-[16px] font-medium">Account overview</p>
          <Button
            label="Go to TX pay"
            classNames={{
              root: "bg-[#42007D] py-1 px-[14px] w-full sm:w-fit",
              label_: "text-[14px] text-white font-normal",
            }}
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
          {overviewList.map((item, index) => (
            <ListView
              key={index}
              {...item}
              className={{ root: "w-full sm:grow" }}
            />
          ))}
        </div>
      </div>
      <div className="p-5 flex flex-col gap-5 border-b border-b-gray-200">
        <p className="text-[16px] font-medium">Base Currency</p>
        <ListView
          title="GBP (£)"
          sideLabel="Current"
          className={{
            root: "w-full sm:w-1/3 border-green-300 bg-green-100",
            rightLabel:
              "text-white bg-green-600 p-2 leading-1 rounded text-[10px] font-medium",
          }}
        />
      </div>
      <div className="p-5 flex flex-col gap-5 border-b-[1px] border-[#FDFDFD]">
        <p className="text-[16px] font-medium">Linked accounts</p>
        <div className="flex flex-col sm:flex-row gap-5">
          {accounts.map((item, index) => (
            <AccountView
              key={index}
              account={item}
              className={{ root: "w-full sm:w-1/3" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TXPay;
