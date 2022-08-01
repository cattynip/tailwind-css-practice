import type { NextPage } from 'next';

const Forms: NextPage = () => {
  return (
    <div className='bg-blue-500 p-4'>
      <form className='flex flex-col p-4 rounded-lg space-y-2 bg-white focus:bg-blue-100 shadow-xl group'>
        <input type="text" required placeholder='Username' className='transition-colors p-1 px-2 placeholder:text-black rounded-lg shadow-xl shadow-neutral-400 focus:outline-none focus:bg-blue-900 focus:placeholder:text-white focus:text-white placeholder-shown:bg-teal-500 required:border-gray-50 invalid:bg-red-500 valid:bg-green-200' />
        <input type="text" disabled placeholder='Birth Day' className='transition-colors disabled:bg-green-200 p-1 px-2 rounded-lg shadow-lg shadow-neutral-400' />
        <input type="password" required placeholder='Password' className='transition-colors p-1 px-2 rounded-lg shadow-lg shadow-neutral-400 placeholder:text-black focus:placeholder:text-white focus:bg-blue-900 focus:outline-none focus:text-white invalid:border-red-700 border-2 valid:border-green-700' />
        <input type="submit" value="Login" className='bg-white p-1 shadow-xl focus:outline-none focus:group-invalid:bg-green-200' />
      </form>
    </div>
  )
};

export default Forms;
