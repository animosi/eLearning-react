import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { AuthContext } from '../../firebase/Auth';
import { Redirect } from 'react-router';
import { app } from '../../firebase/firebase';

const initialValues = {
  email: '',
  password: '',
};

const onSubmit = (values) => {
  const { email, password } = values;
  app
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => console.log(res))
    .catch(function (error) {
      console.log({ error: error.code, message: error.message });
    });
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email format').required('Required'),
  password: Yup.string().min(6).required('Required'),
});

export default function Login() {
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
          <ErrorMessage name='email' />
        </div>

        <div>
          <label htmlFor='channel'></label>
          <Field
            type='password'
            id='password'
            name='password'
            placeholder='Password'
          ></Field>
          <ErrorMessage name='password' />
        </div>

        <button className='button'>Submit</button>
      </Form>
    </Formik>
  );
}
