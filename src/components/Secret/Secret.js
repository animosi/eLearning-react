import React from 'react';
import { app } from '../../firebase/firebase';
import { Button } from '@material-ui/core';

const Secret = () => {
  return (
    <>
      <h1>Secret</h1>
      <Button
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
      </Button>
    </>
  );
};

export default Secret;
