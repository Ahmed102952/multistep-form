type addressData = {
  street: string;
  city: string;
  state: string;
  zip: string;
};

type AddressFormProps = addressData & {
  updateData: (data: Partial<addressData>) => void;
};

const AddressFrom = ({
  street,
  state,
  city,
  zip,
  updateData,
}: AddressFormProps) => {
  return (
    <>
      <h1>Address Details</h1>

      <div
        className="grid grid-cols-1 gap-y-8 justify-center mb-4"
      >
        <input
          type="text"
          name="street"
          id="street"
          placeholder="Street"
          required
          autoFocus
          value={street}
          onChange={(e) => {
            updateData({ street: e.target.value });
          }}
        />
        <input
          type="text"
          name="city"
          id="city"
          placeholder="City"
          required
          value={city}
          onChange={(e) => {
            updateData({ city: e.target.value });
          }}
        />
        <input
          type="text"
          name="state"
          id="state"
          placeholder="State"
          required
          value={state}
          onChange={(e) => {
            updateData({ state: e.target.value });
          }}
        />
        <input
          type="text"
          name="zip"
          id="zip"
          placeholder="Zip Code"
          required
          value={zip}
          onChange={(e) => {
            updateData({ zip: e.target.value });
          }}
        />
      </div>
    </>
  );
};

export default AddressFrom;
