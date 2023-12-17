import React from 'react';
import { useFormik } from 'formik';
import { validate } from '../../utils/validate';

export const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="min-w-[18rem] bg-600/25 mx-auto mt-8 border rounded-lg p-5">
      <div className="mb-4">
        <label htmlFor="firstName" className="block text-gray-300 text-lg mb-2">
          First Name
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="text-red-500 text-xs mt-1">{formik.errors.firstName}</div>
        ) : null}
      </div>

      <div className="mb-4">
        <label htmlFor="lastName" className="block text-gray-300 text-lg mb-2">
          Last Name
        </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="text-red-500 text-xs mt-1">{formik.errors.lastName}</div>
        ) : null}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-300 text-lg mb-2">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-500 text-xs mt-1">{formik.errors.email}</div>
        ) : null}
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </form>
  );
};
