import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';


const LoginForm = (props) => {


    return (
        <Formik
            initialValues={{ login: '', password: '' }}
            validate={values => {
                const errors = {};
                if (!values.login) {
                    errors.login = 'Required';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            name="login"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.login}
                        />
                        {errors.login && touched.login && errors.login}
                    </div>
                    <div>
                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                        {errors.password && touched.password && errors.password}
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            name="checkbox"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.checkbox}
                        />
                    </div>

                    <button type="submit" disabled={isSubmitting}>
                        Login
                    </button>
                </form>
            )}
        </Formik>


    )
}

const Login = (props) => {
    return <div>
        <h1>Login</h1>
        <LoginForm />
    </div>
}

export default Login;