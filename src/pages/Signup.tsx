import Button from "../components/Button";
import InputField from "../components/InputField";
import RadioButton from "../components/RadioButton";

const Signup = () => {
  return (
    <div className="px-5 py-10 flex flex-col justify-between bg-[#F7F8F9] h-full">
      <div className="flex flex-col">
        <div className="h-17.25 w-47 mb-[22px]">
          <h1 className="text-[28px] text-[#1D2226] leading-9 font-medium">
            Create your PopX account
          </h1>
        </div>

        <InputField
          labelText="Full Name"
          placeholderText="Enter full name"
          className="mb-5"
          defaultValue="Marry Doe"
          isRequired
        />

        <InputField
          labelText="Phone number"
          placeholderText="Enter phone number"
          className="mb-5"
          defaultValue="Marry Doe"
          isRequired
        />

        <InputField
          labelText="Email address"
          placeholderText="Enter email address"
          defaultValue="Marry Doe"
          className="mb-5"
          isRequired
        />

        <InputField
          labelText="Password"
          placeholderText="Enter password"
          defaultValue="Marry Doe"
          className="mb-5"
          isRequired
        />

        <InputField
          labelText="Company name"
          placeholderText="Enter company name"
          defaultValue="Marry Doe"
          className="mb-[18px]"
        />

        <RadioButton
          labelText="Are you an Agency?"
          options={["Yes", "No"]}
          selected="Yes"
          isRequired
        />
      </div>

      <Button color="#6C25FF" fontColor="#FFFFFF">
        Create Account
      </Button>
    </div>
  );
};

export default Signup;
