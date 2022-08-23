import type { NextPage } from 'next';

const Peer: NextPage = () => {
  return (
    <div>
      <h1 className='text-center p-[10rem] text-[100px] text-[#ff0000] bg-[#00ff00]'>Hello World!</h1>
      <div className="w-4 h-4 bg-[url('https://avatars.githubusercontent.com/u/96553411?s=96&v=4')]" />
      <form className="flex flex-col space-y-2 p-5">
        <input
          type="text"
          required
          placeholder="Username"
          className="peer rounded-lg border border-gray-400 p-1"
        />
        <span className="hidden peer-invalid:block peer-invalid:text-red-500">
          This input is invalid
        </span>
        <span className="hidden peer-valid:block peer-valid:text-teal-500">
          Awesome Username
        </span>
        <span className="hidden peer-hover:block peer-hover:text-amber-500">
          Hello
        </span>
        <input type="submit" value="Login" className="bg-white" />
      </form>
    </div >
  );
};

export default Peer;
