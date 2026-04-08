type InputFieldProps = {
  className?: string;
  labelText?: string;
  placeholderText?: string;
  isRequired?: boolean;
  defaultValue?: string;
  value: string;
  type?: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const InputField = ({
  className,
  labelText,
  placeholderText,
  value,
  setValue,
  isRequired = false,
  type = "text",
  defaultValue = "",
}: InputFieldProps) => {
  return (
    <div
      className={`h-12.25 relative max-w-83.75 flex justify-end flex-col w-full ${className}`}
    >
      <label className="absolute top-0 left-[9px] px-[5px] pb-0.5 bg-[#F7F8F9] min-w-[103px] w-max h-[17px] text-[#6C25FF] text-[13px] font-normal">
        {labelText}
        {isRequired ? <span className="text-[#DD4A3D]">*</span> : null}
      </label>

      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholderText}
        defaultValue={defaultValue}
        className="h-10 w-full text-[#1D2226] placeholder:text-[14px] placeholder:text-[#919191] rounded-md px-4 border-[#CBCBCB] border"
      />
    </div>
  );
};

export default InputField;
