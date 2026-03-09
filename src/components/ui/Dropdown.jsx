import React from "react";
import Button from "./Button";
import Unit from "../../assets/images/icon-dropdown.svg?react";
import Config from "../../assets/images/icon-units.svg?react";
import Check from "../../assets/images/icon-checkmark.svg?react";

const Dropdown = ({ dropDownList, unit, setUnit }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSelectUnit = (key, value) => {
    setUnit((prevUnit) => ({
      ...prevUnit,
      [key]: value,
    }));
  };

  return (
    <article className="relative">
      <Button className="rounded-8" onClick={() => setIsOpen((prev) => !prev)}>
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

          {dropDownList?.map((group) => (
            <ul key={group.key}>
              <li className="text-neutral-300 text-preset-8 px-2 pt-[6px]">
                {group.label}
              </li>

              <li>
                {group.options?.map((option) => {
                  const isSelected = unit[group.key] === option.value;

                  return (
                    <ul key={option.value}>
                      <li>
                        <button
                          className={`rounded-8 text-preset-7 px-2 py-[10px] w-full text-start flex items-center justify-between ${
                            isSelected
                              ? "bg-neutral-700"
                              : "hover:bg-neutral-700"
                          }`}
                          onClick={() =>
                            handleSelectUnit(group.key, option.value)
                          }
                        >
                          <span>{option.label}</span>
                          {isSelected && (
                            <Check className="w-[14px] h-[14px]" />
                          )}
                        </button>
                      </li>
                    </ul>
                  );
                })}
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
