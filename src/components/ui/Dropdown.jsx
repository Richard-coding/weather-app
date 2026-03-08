import React from "react";
import Button from "./Button";
import Unit from "../../assets/images/icon-dropdown.svg?react";
import Config from "../../assets/images/icon-units.svg?react";

const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [filter, setFilter] = React.useState(null);

  function handleSelected(item) {
    console.log(item.value);
  }

  return (
    <article className="relative">
      <Button className="rounded-8" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex items-center gap-[6px] px-[10px] py-2 w-[89px] h-[33px]">
          <Config className="w-[14px] h-[14px]" />
          <p className="text-preset-8 font-medium">Units</p>
          <Unit className="w-[14px] h-[14px]" />
        </div>
      </Button>
      {isOpen && (
        <div className="absolute mt-[10px] right-0 rounded-12 border-neutral-600 border-[1px] border-solid bg-neutral-800 px-2 py-[6px] min-w-[214px] grid grid-cols-1 gap-1 z-50">
          <button className="text-preset-7 px-2 py-[10px] hover:bg-neutral-700 rounded-8 text-start">
            Switch to imperial
          </button>
          {items?.map((item, index) => (
            <ul key={index}>
              <li className="text-neutral-300 text-preset-8 px-2 pt-[6px]">
                {item.label}
              </li>
              <li>
                {item.options?.map((item, index) => (
                  <ul key={index}>
                    <li
                      className="hover:bg-neutral-700 rounded-8 text-preset-7 px-2 py-[10px]"
                      onClick={() => handleSelected(item)}
                    >
                      {item.unit}
                    </li>
                  </ul>
                ))}
              </li>
            </ul>
          ))}
          {/* {isOpen && (
            <div className="absolute bg-neutral-800 border-neutral-600 border-solid border-[1px] w-[214px] rounded-12 text-preset-7 -bottom-60 -left-6 p-2">
              {days.map((element, index) => (
                <ul key={index}>
                  <li className=" px-2 py-[10px] hover:bg-neutral-700 rounded-8">
                    {element}
                  </li>
                </ul>
              ))}
            </div>
          )} */}
        </div>
      )}
    </article>
  );
};

export default Dropdown;
