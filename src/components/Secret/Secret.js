import React from 'react';
import { app } from '../../firebase/firebase';

const Secret = () => {
  return (
    <>
      <h1>Secret</h1>
      <button
        onClick={() =>
          app
            .auth()
            .signOut()
            .catch((err) => {
              console.log({ code: err.code, message: err.message });
            })
        }
      >
        Sign out
      </button>
    </>
  );
};

export default Secret;
