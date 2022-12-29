export const Search = () => {
  return (
    <div className="flex flex-col py-4 px-2  items-center justify-center h-screen -mt-24 w-1/2">
      <h1 className="font-semibold leading-6 ml-64 mb-6 text-base capitalize text-black-900 text-2xl">
        You don’t have any Room please Join
      </h1>
      <div className="ml-64">
        <div class="relative text-gray-600 focus-within:text-gray-400">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <button
              type="submit"
              class="p-1 focus:outline-none focus:shadow-outline"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                class="w-6 h-6"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </span>
          <input
            type="search"
            name="q"
            class="py-2 px-12 text-sm border-2 border-gray-400 text-gray-900 bg-white rounded-full  pl-10 focus:outline-none"
            placeholder="Please Enter Room Code to Join"
            autocomplete="off"
          />
        </div>
      </div>
      <div className="mt-6 ml-64">
        <button className="rounded-full bg-green-900 text-white py-2 px-8">
          Join Now
        </button>
      </div>
    </div>
  );
};
