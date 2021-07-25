import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectNotes, deleteNotes } from './notesSlice';
export function Notes() {
  const notes = useSelector(selectNotes);
  const dispatch = useDispatch();
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
      {notes && notes.length > 0 ? (
        <>
          <div className="text-left max-w-3xl w-full mx-auto mt-12 py-8 text-gray-400">
            {notes.map((n) => {
              return (
                <div className="pb-9" key={n.id}>
                  <h4 className="font-bold text-gray-900 text-xl">
                    {n.heading || 'no heading'}
                  </h4>
                  <p className="font-bold text-gray-400">
                    {n.subheading || 'no subheading'}
                  </p>
                  <br />
                  <div className="flex">
                    <span className="mr-4 cursor-pointer">
                      <Link to={`/noteEdit/${n.id}`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                          <path
                            fill-rule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </Link>
                    </span>
                    <span
                      className="mr-4 cursor-pointer"
                      onClick={() => dispatch(deleteNotes(n.id))}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <>
          <div className="text-center max-w-3xl w-full mx-auto mt-12 bg-gray-100 p-8 text-gray-400">
            no data
          </div>
        </>
      )}
    </div>
  );
}
