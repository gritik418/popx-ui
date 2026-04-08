type InputFieldProps = {
  className?: string;
  labelText?: string;
  placeholderText?: string;
};

const InputField = ({
  className,
  labelText,
  placeholderText,
}: InputFieldProps) => {
  return (
    <div
      className={`h-12.25 relative max-w-83.75 flex justify-end flex-col w-full ${className}`}
    >
      <label className="absolute top-0 left-[9px] px-[5px] pb-0.5 bg-[#F7F8F9] w-[103px] h-[17px] text-[#6C25FF] text-[13px] font-normal">
        {labelText}
      </label>

      <input
        type="text"
        placeholder={placeholderText}
        className="h-10 w-full placeholder:text-[14px] placeholder:text-[#919191] rounded-md px-4 border-[#CBCBCB] border"
      />
    </div>
  );
};

export default InputField;
