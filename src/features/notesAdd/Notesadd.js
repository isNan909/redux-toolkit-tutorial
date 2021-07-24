import React from 'react';
import { useDispatch } from 'react-redux';
import {addNotes } from '../notes/notesSlice';
export function Notesadd() {
  const dispatch = useDispatch();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-2xl font-extrabold text-gray-900">
          Add new notes
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="heading"
              className="sm:text-xs font-bold mb-2 block"
            >
              Heading
            </label>
            <input
              id="heading"
              name="heading"
              type="text"
              autoComplete="heading"
              required
              className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
              placeholder="Notes heading"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="sm:text-xs font-bold mb-2 block"
            >
              Description
            </label>
            <textarea
              className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
              rows="3"
              placeholder="Enter some description"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              onClick={()=> dispatch(addNotes('note addddd'))}
            >
              Add my note
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
