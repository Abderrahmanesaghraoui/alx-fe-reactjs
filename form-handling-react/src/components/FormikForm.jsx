import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation schema using Yup
const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const FormikForm = () => {
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values) => {
    // Simulate API call for user registration
    console.log('Form submitted:', values);
    alert('Registration successful!');
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form style={{ maxWidth: '400px', margin: '0 auto' }}>
        <h2>User Registration (Formik)</h2>
        <div>
          <label>
            Username:
            <Field type="text" name="username" />
          </label>
          <ErrorMessage name="username" component="p" style={{ color: 'red' }} />
        </div>
        <div>
          <label>
            Email:
            <Field type="email" name="email" />
          </label>
          <ErrorMessage name="email" component="p" style={{ color: 'red' }} />
        </div>
        <div>
          <label>
            Password:
            <Field type="password" name="password" />
          </label>
          <ErrorMessage name="password" component="p" style={{ color: 'red' }} />
        </div>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default FormikForm;