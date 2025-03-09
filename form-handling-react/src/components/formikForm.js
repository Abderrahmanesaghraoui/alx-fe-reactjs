import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'; // Import Formik components
import * as Yup from 'yup'; // Import Yup for validation

// Define initial values for the form
const initialValues = {
  username: '',
  email: '',
  password: '',
};

// Define validation schema using Yup
const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const FormikForm = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    // Simulate API call for user registration
    console.log('Form submitted:', values);
    alert('Registration successful!');
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues} // Pass initial values
      validationSchema={validationSchema} // Pass validation schema
      onSubmit={handleSubmit} // Pass submit handler
    >
      {({ isSubmitting }) => (
        <Form style={{ maxWidth: '400px', margin: '0 auto' }}>
          <h2>User Registration (Formik)</h2>
          <div>
            <label>
              Username:
              <Field type="text" name="username" /> {/* Field for username */}
            </label>
            <ErrorMessage name="username" component="p" style={{ color: 'red' }} /> {/* Error message for username */}
          </div>
          <div>
            <label>
              Email:
              <Field type="email" name="email" /> {/* Field for email */}
            </label>
            <ErrorMessage name="email" component="p" style={{ color: 'red' }} /> {/* Error message for email */}
          </div>
          <div>
            <label>
              Password:
              <Field type="password" name="password" /> {/* Field for password */}
            </label>
            <ErrorMessage name="password" component="p" style={{ color: 'red' }} /> {/* Error message for password */}
          </div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Register'} {/* Submit button */}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;