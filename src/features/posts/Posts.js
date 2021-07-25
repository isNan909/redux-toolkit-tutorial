import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, selectNotes } from './postSlice';

const Posts = () => {
  const dispatch = useDispatch();
  const postState = useSelector(selectNotes);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div>
      <div className="min-h-screen mx-auto mt-3 bg-gray-50 py-12 px-4">
        <div className=" flex flex-col max-w-3xl w-full justify-between mx-auto">
          <div>{postState.status === 'loading' && <>loading ...</>}</div>
          {postState.posts.map((post) => {
            return (
              <div className="mb-9" key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Posts;
