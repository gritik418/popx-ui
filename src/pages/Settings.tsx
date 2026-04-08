import { FaCamera } from "react-icons/fa6";

const Settings = () => {
  return (
    <div className="bg-[#F7F8F9] h-full flex flex-col">
      <nav
        className="h-[68px] bg-white px-[15px] mb-[30px]"
        style={{ boxShadow: "0px 3px 6px #00000007" }}
      >
        <div className="h-[22px] mt-[27px] flex items-center">
          <h1 className="text-[#1D2226] text-lg">Account Settings</h1>
        </div>
      </nav>

      <div className="h-[76px] px-5 gap-5 mb-[30px] flex items-start">
        <div className="h-[76px] relative w-[76px] rounded-full">
          <img src="/images/Avatar.png" />

          <div className="h-[23px] right-0 -translate-y-full border-0 absolute w-[23px] flex items-center justify-center bg-[#6C25FF] rounded-full">
            <FaCamera className="text-white" size={13} />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="h-[18px] flex items-center">
            <p className="text-[#1D2226] text-[15px] font-medium">Marry Doe</p>
          </div>

          <div className="h-[17px] flex items-center">
            <p className="text-[#1D2226] text-sm font-normal">
              Marry@Gmail.Com
            </p>
          </div>
        </div>
      </div>

      <div className="px-5 mb-5">
        <p className="text-[#1D2226] text-[13px] font-normal leading-[22px]">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>

      <div className="border-t border-dashed border-[#CBCBCB]"></div>
      <div className="flex flex-1"></div>

      <div className="border-t mb-[36px] border-dashed border-[#CBCBCB]"></div>
    </div>
  );
};

export default Settings;
