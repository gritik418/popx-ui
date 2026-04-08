import { useState } from "react";
import Button from "../components/Button";
import InputField from "../components/InputField";
import RadioButton from "../components/RadioButton";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("Marry Doe");
  const [phone, setPhone] = useState("Marry Doe");
  const [email, setEmail] = useState("Marry Doe");
  const [password, setPassword] = useState("Marry Doe");
  const [company, setCompany] = useState("Marry Doe");
  const [agency, setAgency] = useState<string>("Yes");

  const handleSubmit = () => {
    if (!fullName || !phone || !email || !password || !agency || !company) {
      alert("Please fill all required fields");
      return;
    }

    navigate("/account");
  };

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
          value={fullName}
          setValue={setFullName}
          isRequired
        />

        <InputField
          labelText="Phone number"
          placeholderText="Enter phone number"
          value={phone}
          setValue={setPhone}
          className="mb-5"
          defaultValue="Marry Doe"
          isRequired
        />

        <InputField
          value={email}
          setValue={setEmail}
          labelText="Email address"
          placeholderText="Enter email address"
          defaultValue="Marry Doe"
          className="mb-5"
          isRequired
        />

        <InputField
          value={password}
          setValue={setPassword}
          labelText="Password"
          placeholderText="Enter password"
          defaultValue="Marry Doe"
          className="mb-5"
          type="password"
          isRequired
        />

        <InputField
          value={company}
          setValue={setCompany}
          labelText="Company name"
          placeholderText="Enter company name"
          defaultValue="Marry Doe"
          className="mb-[18px]"
        />

        <RadioButton
          labelText="Are you an Agency?"
          options={["Yes", "No"]}
          value={agency}
          onChange={setAgency}
          isRequired
        />
      </div>

      <Button onClick={handleSubmit} color="#6C25FF" fontColor="#FFFFFF">
        Create Account
      </Button>
    </div>
  );
};

export default Signup;
