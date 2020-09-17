import React from 'react';
import {
  app,
  googleAuthProvider,
  facebookAuthProvider,
} from '../../firebase/firebase';

const Google = () => {
  return (
    <div>
      <button
        onClick={() => {
          app.auth().signInWithPopup(googleAuthProvider);
        }}
      >
        Google Sign In
      </button>
      <button
        onClick={() => {
          app.auth().signInWithPopup(facebookAuthProvider);
        }}
      >
        Facebook Sign In
      </button>
    </div>
  );
};

export default Google;
