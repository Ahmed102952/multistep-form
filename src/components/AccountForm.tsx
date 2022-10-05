type accountData = {
  email: string;
  password: string;
};

type AccountFormProps = accountData & {
  updateData: (data: Partial<accountData>) => void;
};
const AccountFrom = ({ email, password, updateData }: AccountFormProps) => {
  return (
    <>
      <h1>Account Details</h1>
      <div className="grid grid-cols-1 gap-y-8 justify-center mb-4">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
          autoFocus
          value={email}
          onChange={(e) => {
            updateData({ email: e.target.value });
          }}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Paswword"
          required
          value={password}
          onChange={(e) => {
            updateData({ password: e.target.value });
          }}
        />
      </div>
    </>
  );
};

export default AccountFrom;
