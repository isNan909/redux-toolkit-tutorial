import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectNotes } from './notesSlice';
export function Notes() {
  const notesState = useSelector(selectNotes);
  return (
    <div className="min-h-screen mx-auto mt-3 bg-gray-50 py-12 px-4">
      <div className=" flex max-w-3xl w-full justify-between mx-auto">
        <div className="text-3xl font-extrabold text-gray-900">My Notes</div>
        <div>
          <Link to={`/noteAdd`}>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Notes
            </button>
          </Link>
        </div>
      </div>
      {notesState && (
        <div className="text-center max-w-3xl w-full mx-auto mt-12 bg-gray-100 p-8 text-gray-400">
          no data
        </div>
      )}
    </div>
  );
}
