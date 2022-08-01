import type { NextPage } from 'next';

const Details: NextPage = () => {
  return (
    <div className="flex flex-col space-y-2 p-5">
      <div>
        <details className="select-none open:bg-indigo-400 open:text-white">
          <summary className="cursor-pointer select-none">
            What is my fav. food.
          </summary>
          <span className="selection:bg-indigo-600 selection:text-white">
            Kimchi
          </span>
        </details>
      </div>

      <div>
        <ul className="list-disc marker:text-teal-500">
          <li>hi</li>
          <li>hi</li>
          <li>hi</li>
        </ul>
      </div>

      <div>
        <input
          type="file"
          className="file:cursor-pointer file:rounded-xl file:border-0 file:border-purple-400 file:bg-purple-400 file:px-5 file:text-white file:transition-colors file:hover:border file:hover:bg-white file:hover:text-purple-400"
        />
      </div>

      <div>
        <p className="first-letter:text-6xl first-letter:hover:text-purple-400">
          Hello World!
        </p>
      </div>
    </div>
  );
};

export default Details;
