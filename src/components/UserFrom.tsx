
type userData = {
  name: string,
  age: string;
}
type UserFormProps = userData & {updateData: (data: Partial<userData>) => void}

const UserFrom = ({ name, age, updateData }: UserFormProps) => {
  return (
    <>
      <h1>User Details</h1>

      <div className="grid grid-cols-1 gap-y-8 justify-center mb-4">
        <input
          type="text"
          name="name"
          id="name"
          required
          autoFocus
          placeholder="Name"
          value={name}
          onChange={e => {
            updateData({name:  e.target.value})
          }}
        />
        <input
          type="number"
          name="age"
          id="age"
          required
          min={1}
          placeholder="Age"
          value={age}
          onChange={e => {
            updateData({age:  e.target.value})
          }}
        />
      </div>
    </>
  );
};

export default UserFrom;
