import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className='bg-slate-400 py-20 px-10 grid gap-10 min-h-screen'>
      <div className='bg-white p-6 rounded-3xl shadow-xl'>
        <span className='font-semibold text-3xl'>Select Item</span>

        <div className='flex justify-between my-2'>
          <span className='text-gray-500'>Grey Chair</span>
          <span className='font-bold'>$19</span>
        </div>

        <div className='flex justify-between my-2'>
          <span className='text-gray-500'>Tooly Chair</span>
          <span className='font-bold'>$81</span>
        </div>

        <div className='flex justify-between mt-2 pt-2 border-t-2 border-dashed'>
          <span>Total</span>
          <span className='font-extrabold'>$100</span>
        </div>

        <div className='mt-5 bg-blue-500 text-white p-2 text-center rounded-xl cursor-pointer w-2/4 mx-auto'>Checkout</div>
      </div>

      <div className='bg-white overflow-hidden rounded-2xl shadow-xl'>
        <div className='bg-blue-500 p-6 pb-14'>
          <span className='text-white text-2xl'>Profile</span>
        </div>
        <div className='bg-white rounded-3xl px-7 pt-9 relative -top-5'>
          <div className='flex relative -top-20 justify-between items-end'>
            <div className='flex flex-col items-center'>
              <span className='text-sm text-gray-500'>Orders</span>
              <span className='font-medium'>340</span>
            </div>

            <div className='h-28 w-28 bg-red-400 rounded-full' />

            <div className='flex flex-col justify-between items-end'>
              <span className='text-sm text-gray-500'>Spent</span>
              <span className='font-medium'>$2,310</span>
            </div>
          </div>

          <div className='relative flex flex-col items-center -mt-16'>
            <span className='font-bold text-2xl'>Tony Molloy</span>
            <span className='text-gray-500'>America</span>
          </div>
        </div>
      </div>

      <div className='bg-white p-10 rounded-2xl shadow-xl'>
        <div className='flex mb-5 justify-between items-center'>
          <span>⬅️</span>
          <div>
            <span className='space-x-5'>⭐️ 4.9</span>
            <span className='shadow-xl p-2 rounded-md'>💖</span>
          </div>
        </div>

        <div className='bg-zinc-400 h-72 mb-5' />
        <div className='flex flex-col'>
          <span className='font-medium text-xl'>Swoon Launge</span>
          <span className='text-xs text-gray-500'>Chair</span>
          <div className='mt-3 mb-5 flex justify-between items-center'>
            <div className='flex items-center'>
              <input type="radio" />
              <input type="radio" />
              <input type="radio" />
            </div>
            <div className='flex items-center space-x-4'>
              <button className='bg-blue-200 flex justify-center items-center aspect-square w-8 font-medium text-xl text-gray-500 shadow-xl rounded-xl'>-</button>
              <span>1</span>
              <button className='bg-blue-200 flex justify-center items-center aspect-square w-8 font-medium text-xl text-gray-500 shadow-xl rounded-xl'>+</button>
            </div>
          </div>
          <div className='flex justify-between items-center'>
            <span className='font-bold text-2xl'>$450</span>
            <button className='bg-blue-500 text-center py-2 px-8 text-xs rounded-xl shadow-xl text-white cursor-pointer'>Add to cart</button>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Home;
