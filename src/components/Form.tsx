"use client";
// use dummy data and functionality to make a dummy demo
import SelectInput from "./SelectInput";

export default function Form() {
  return (
    <div className="relative px-6 py-32 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute overflow-hidden inset-x-0 -top-40 -z-10 transform-gpu blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-288.75"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-100 sm:text-5xl">
          Try it out!
        </h2>
        <p className="mt-2 text-lg/8 text-gray-300">
          Upload an excel file, select the metric being evaluated, and click
          generate!
        </p>
      </div>
      {/* Start Form */}
      <form
        action="#"
        method="POST"
        className="mx-auto mt-8 max-w-xl sm:mt-10"
        id="form"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-md font-semibold text-gray-100"
            >
              Excel file
            </label>
            <div className="mt-2.5">
              <input
                id="dataFile"
                name="dataFile"
                type="file"
                accept=".xlsx,.xls,.csv"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-md font-semibold text-gray-100"
            >
              Template
            </label>
            <div>
              {/* <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              /> */}
              <SelectInput />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-2xl font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Generate
          </button>
        </div>
      </form>
    </div>
  );
}
