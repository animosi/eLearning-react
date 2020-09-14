import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { app } from '../../firebase/firebase';
import { AuthContext } from '../../firebase/Auth';
import { Redirect } from 'react-router-dom';

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
    .catch(function (error) {
      console.log({ error: error.code, message: error.message });
    });
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Must be valid email').trim().required('Required'),
  password: Yup.string()
    .matches(/^[a-zA-Z0-9]{6,30}$/)
    .required('Required'),
});

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
          <ErrorMessage name='email' />
        </div>

        <div>
          <label htmlFor='password'></label>
          <Field
            type='password'
            id='password'
            name='password'
            placeholder='Password'
          ></Field>
          <ErrorMessage name='password' />
        </div>
        <button>Submit</button>
      </Form>
    </Formik>
  );
}
