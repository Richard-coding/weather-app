import Icon from "../../assets/images/icon-search.svg?react";

const InputField = ({ value, onChange }) => {
  return (
    <div className="relative">
      <input
        value={value}
        onChange={onChange}
        className="
          w-full h-14
          pl-[60px] pr-4
          rounded-12
          bg-neutral-700
        "
        type="text"
        placeholder="Search for a place..."
      />

      <Icon
        className="
          absolute left-6
          top-1/2 -translate-y-1/2
          w-5 h-5
        "
      />
    </div>
  );
};

export default InputField;
