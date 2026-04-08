import React from "react";

type RadioButtonProps = {
  labelText: string;
  isRequired?: boolean;
  options: string[];
  selected?: string;
};

const RadioButton = ({
  labelText,
  options,
  selected = "",
  isRequired = false,
}: RadioButtonProps) => {
  return (
    <div className="flex flex-col">
      <label className="text-[13px] mb-2.5 text-[#1D2226]">
        {labelText}
        {isRequired ? <span className="text-[#DD4A3D]">*</span> : null}
      </label>

      <div className="flex gap-5.75">
        {options.map((option) => (
          <div className="flex gap-3 items-center box-border">
            <div
              className={`h-5.5 w-5.5 items-center justify-center flex rounded-full border ${selected === option ? "border-[#6C25FF]" : "border-[#919191]"}`}
            >
              {selected === option ? (
                <div className="h-3 w-3 rounded-full bg-[#6C25FF]"></div>
              ) : null}
            </div>

            <div className="h-[17px] flex items-center">
              <p className="text-[#1D2226] text-sm">{option}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioButton;
