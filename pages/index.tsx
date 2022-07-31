import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="grid min-h-screen gap-10 bg-slate-400 py-20 px-10">
      <div className="flex flex-col rounded-3xl bg-white p-6 shadow-xl">
        <span className="text-3xl font-semibold">Select Item</span>

        <ul>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <div key={item} className="flex justify-between my-2 odd:bg-blue-50 even:bg-yellow-50 first:bg-teal-50 last:bg-amber-50">
              <span className="text-gray-500">Grey Chair</span>
              <span className="font-semibold">$19</span>
            </div>
          ))}
        </ul>

        <ul>
          {["a", "b", "c", ""].map((children, index) => (
            <li className='bg-red-500 py-2 empty:hidden' key={index}>
              {children}
            </li>
          ))}
        </ul>

        <div className="mt-2 flex justify-between border-t-2 border-dashed pt-2">
          <span>Total</span>
          <span className="font-extrabold">$100</span>
        </div>

        <button className="mx-auto mt-5 w-3/4 cursor-pointer rounded-xl bg-blue-500 p-2 text-center text-white transition-colors hover:bg-teal-500 focus:outline-none active:bg-yellow-500">
          Checkout
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
        <div className="bg-blue-500 p-6 pb-14">
          <span className="text-2xl text-white">Profile</span>
        </div>
        <div className="relative -top-5 rounded-3xl bg-white px-7 pt-9">
          <div className="relative -top-20 flex items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-medium">340</span>
            </div>

            <div className="h-28 w-28 rounded-full bg-red-400" />

            <div className="flex flex-col items-end justify-between">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-medium">$2,310</span>
            </div>
          </div>

          <div className="relative -mt-16 flex flex-col items-center">
            <span className="text-2xl font-bold">Tenacious Novel</span>
            <span className="text-gray-500">Canada, BC</span>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-white p-10 shadow-xl">
        <div className="mb-5 flex items-center justify-between">
          <span>⬅️</span>
          <div>
            <span className="space-x-5">⭐️ 4.9</span>
            <span className="rounded-md p-2 shadow-xl">💖</span>
          </div>
        </div>

        <div className="mb-5 h-72 bg-zinc-400" />
        <div className="flex flex-col">
          <span className="text-xl font-medium">Swoon Launge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-3 mb-5 flex items-center justify-between">
            <div className="space-x-2">
              <button className="h-5 w-5 rounded-full bg-yellow-500 transition focus:ring-2 ring-offset-2 ring-yellow-600" />
              <button className="h-5 w-5 rounded-full bg-indigo-500 transition focus:ring-2 ring-offset-2 ring-indigo-600" />
              <button className="h-5 w-5 rounded-full bg-teal-500 transition focus:ring-2 ring-offset-2 ring-teal-600" />
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex aspect-square w-8 items-center justify-center rounded-xl bg-blue-200 text-xl font-medium text-gray-500 shadow-xl">
                -
              </button>
              <span>1</span>
              <button className="flex aspect-square w-8 items-center justify-center rounded-xl bg-blue-200 text-xl font-medium text-gray-500 shadow-xl">
                +
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold">$450</span>
            <button className="cursor-pointer rounded-xl bg-blue-500 py-2 px-8 text-center text-xs text-white shadow-xl">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
