import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { app } from '../../firebase/firebase';
import { AuthContext } from '../../firebase/Auth';
import { Redirect } from 'react-router-dom';
import { validationSchema } from '../../validators/auth.validator';
import { Button } from '@material-ui/core';

const initialValues = {
  email: '',
  password: '',
};

const onSubmit = (values) => {
  const { email, password } = values;
  console.log({ email, password });
  app
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((res) => console.log(res))
    .catch((err) => console.log({ error: err.code, message: err.message }));
};

export default function Register() {
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to='/' />;
  }
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <div>
          <label htmlFor='email'></label>
          <Field
            type='email'
            id='email'
            name='email'
            placeholder='Email'
          ></Field>
          <ErrorMessage name='email'>{(msg) => <div>{msg}</div>}</ErrorMessage>
        </div>

        <div>
          <label htmlFor='password'></label>
          <Field
            type='password'
            id='password'
            name='password'
            placeholder='Password'
          ></Field>
          <ErrorMessage name='password'>
            {(msg) => <div>{msg}</div>}
          </ErrorMessage>
        </div>
        <Button type='submit'>Register</Button>
      </Form>
    </Formik>
  );
}
