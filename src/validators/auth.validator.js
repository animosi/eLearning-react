import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Must a be valid email')
    .trim()
    .required('Required'),
  password: Yup.string()
    .matches(/^[a-zA-Z0-9]{6,30}$/)
    .required('Required'),
});
