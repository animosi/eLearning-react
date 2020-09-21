import React from 'react';
import {
  app,
  googleAuthProvider,
  facebookAuthProvider,
} from '../../firebase/firebase';
import { Button } from '@material-ui/core';

const Google = () => {
  return (
    <div>
      <Button
        onClick={() => {
          app.auth().signInWithPopup(googleAuthProvider);
        }}
      >
        Google Sign In
      </Button>
      <Button
        onClick={() => {
          app.auth().signInWithPopup(facebookAuthProvider);
        }}
      >
        Facebook Sign In
      </Button>
    </div>
  );
};

export default Google;
