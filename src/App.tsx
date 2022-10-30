import { useCallback, useState } from "react";
import AccountFrom from "./components/AccountForm";
import AddressFrom from "./components/AddressFrom";
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

  const updateData = useCallback((data: Partial<Data>) => {
    setData((prev) => {
      return { ...prev, ...data };
    });
  }, []);

  const { steps, step, currentStep, next, back, isFirstStep, isLastStep } =
    useMultistepsForm([
      <UserFrom {...data} updateData={updateData} />,
      <AddressFrom {...data} updateData={updateData} />,
      <AccountFrom {...data} updateData={updateData} />,
    ]);

  return (
    <main
      className="h-screen w-screen pt-28"
      style={{
        backgroundImage: `url('https://ik.imagekit.io/b85lgzght1m/bg/photo-1519681393784-d120267933ba_SoeAH9AXo.jpg?tr=w-${window.innerWidth}`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <form
        className="relative max-w-md w-full px-16 py-8 mx-auto bg-white/20 backdrop-blur-md rounded-md shadow-md"
        onSubmit={(e) => {
          e.preventDefault();
          if (!isLastStep) return next();
          window.alert("Account Created");
        }}
      >
        <div className="flex justify-end text-white text-lg font-semibold mb-2">
          {currentStep + 1} / {steps.length}
        </div>
        {step}
        <div className="flex justify-between">
          {!isFirstStep ? (
            <button
              type="button"
              className="text-xl text-white my-4 font-semibold"
              onClick={(e) => {
                e.preventDefault();
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
    </main>
  );
}

export default App;
