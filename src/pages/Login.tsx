import Button from "../components/Button";
import InputField from "../components/InputField";

const Login = () => {
  return (
    <div className="px-5 py-10 bg-[#F7F8F9] h-full">
      <div className="h-17.25 w-47 mb-3.5">
        <h1 className="text-[28px] text-[#1D2226] leading-9 font-medium">
          Signin to your PopX account
        </h1>
      </div>

      <div className="h-12 flex max-w-58 items-center mb-6">
        <p className="text-[#1D2226]/60 text-[18px] leading-6.5 font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>

      <InputField className="mb-3.5" />

      <InputField className="mb-3.5" />

      <Button color="#CBCBCB" fontColor="#FFFFFF">
        Login
      </Button>
    </div>
  );
};

export default Login;
