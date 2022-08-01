import type { NextPage } from 'next';

const Forms: NextPage = () => {
  return (
    <div className="bg-blue-500 p-4">
      <form className="group flex flex-col space-y-2 rounded-lg bg-white p-4 shadow-xl focus:bg-blue-100">
        <input
          type="text"
          required
          placeholder="Username"
          className="rounded-lg p-1 px-2 shadow-xl shadow-neutral-400 transition-colors placeholder:text-black placeholder-shown:bg-teal-500 required:border-gray-50 valid:bg-green-200 invalid:bg-red-500 focus:bg-blue-900 focus:text-white focus:outline-none focus:placeholder:text-white"
        />
        <input
          type="text"
          disabled
          placeholder="Birth Day"
          className="rounded-lg p-1 px-2 shadow-lg shadow-neutral-400 transition-colors disabled:bg-green-200"
        />
        <input
          type="password"
          required
          placeholder="Password"
          className="rounded-lg border-2 p-1 px-2 shadow-lg shadow-neutral-400 transition-colors placeholder:text-black valid:border-green-700 invalid:border-red-700 focus:bg-blue-900 focus:text-white focus:outline-none focus:placeholder:text-white"
        />
        <input
          type="submit"
          value="Login"
          className="bg-white p-1 shadow-xl focus:outline-none focus:group-invalid:bg-green-200"
        />
      </form>
    </div>
  );
};

export default Forms;
