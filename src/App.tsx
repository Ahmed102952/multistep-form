import { useState } from "react";
import AccountFrom from "./components/AccountForm";
import AddressFrom from "./components/addressFrom";
import UserFrom from "./components/UserFrom";
import { useMultistepsForm } from "./hooks/useMultistepsForm";

const INTIAL_DATA = {
  name: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
};

type Data = {
  name: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
};

function App() {
  const [data, setData] = useState(INTIAL_DATA);

  const updateData = (data: Partial<Data>) => {
    setData((prev) => {
      return { ...prev, ...data };
    });
  };
  const { steps, step, currentStep, next, back, isFirstStep, isLastStep } =
    useMultistepsForm([
      <UserFrom {...data} updateData={updateData} />,
      <AddressFrom {...data} updateData={updateData} />,
      <AccountFrom {...data} updateData={updateData} />,
    ]);
  return (
    <form
      className="relative max-w-md w-full px-16 py-8 mx-auto bg-white/20 backdrop-blur-md rounded-md shadow-md"
      onSubmit={(e) => {
        e.preventDefault();
        if (!isLastStep) return next();
        window.alert("Account Created");
      }}
    >
      {step}
      <div className="flex justify-between">
        {!isFirstStep ? (
          <button
            type="button"
            className="text-xl text-white my-4 font-semibold"
            onClick={(e) => {
              e.preventDefault()
              back();
            }}
          >
            Back
          </button>
        ) : (
          <button></button>
        )}
        <button
          type="submit"
          className={`text-xl text-white my-4 font-semibold`}
        >
          {isLastStep ? "Finish" : "Next"}
        </button>
      </div>
    </form>
  );
}

export default App;
