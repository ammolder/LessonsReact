import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import * as yup from 'yup';

let schema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().min(6).max(16).required(),
});

const initalValue = {
  login: '',
  password: '',
};

const Input = styled(Field)`
  color: grey;
`;

export const LoginForm = () => {
  // Звичайна форма
  // const handleSubmit = e => {
  //   e.preventDefault();
  // };

  // return (
  //   <form autoComplete="off" onSubmit={handleSubmit}>
  //     <label htmlFor="login">
  //       Login
  //       <input type="text" name="login" />
  //     </label>
  //     <label htmlFor="password">
  //       Password
  //       <input type="text" name="password" />
  //     </label>
  //     <button type="submit">Submit</button>
  //   </form>
  // );

  const handleSubmit = (value, { resetForm }) => {
    console.log('value :', value);
    resetForm();
  };

  return (
    <Formik
      initialValues={initalValue}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form autoComplete="off">
        <label htmlFor="login">
          Login
          <Input type="text" name="login" />
          <ErrorMessage name="login" component="div" />
        </label>
        <label htmlFor="password">
          Password
          <Input type="text" name="password" />
          <ErrorMessage name="password" component="div" />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
