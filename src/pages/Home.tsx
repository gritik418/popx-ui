import Button from "../components/Button";

const Home = () => {
  return (
    <div className="px-5 py-10.25 flex flex-col h-full justify-end">
      <div className="h-8.25 flex items-center mb-2.5">
        <h1 className="text-[#1D2226] text-[28px] font-medium">
          Welcome to PopX
        </h1>
      </div>

      <div className="h-12 flex max-w-58 items-center mb-7.25">
        <p className="text-[#1D2226]/60 text-[18px] leading-6.5 font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>

      <Button className="mb-2.5" color="#6C25FF">
        Create Account
      </Button>
      <Button color="#6C25FF4B" fontColor="#1D2226">
        Already Registered? Login
      </Button>
    </div>
  );
};

export default Home;
