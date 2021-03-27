import React from 'react';
import { withFormik} from 'formik';
import {compose} from "redux";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profileReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {logIn, setErrors} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import style from './Login.module.css';


class Error extends React.Component {
    render() {
        return (
            <div className={style.error}>Error: wrong login or email!!</div>
        );
    }
}

class MyForm extends React.Component {
    render () {
        const {
            values,
            touched,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
        } = this.props;
        if(this.props.auth.isAuth) {
            return <Redirect to={"/profile"} />
        }
        return (
            <form onSubmit={handleSubmit}>
                <div className={style.formGroup}>
                    <label>Email: </label>
                    <input
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        name="email"
                    />
                    {errors.email && touched.email && <div id="feedback">{errors.email}</div>}
                </div>
                <div className={style.formGroup}>
                    <label>Password: </label>
                    <input
                        type="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        name="password"
                    />
                    {errors.password && touched.password && <div id="feedback">{errors.password}</div>}
                </div>
                <div className={style.formGroup}>

                    <input
                        type="checkbox"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.rememberMe}
                        name="rememberMe"
                    /> remember me

                </div>
                {this.props.auth.errors && <Error />}


                <div className={style.formGroup}>
                    <button type="submit">Login</button>
                </div>

            </form>
        );
    }
};

const LoginContainer = withFormik({
    mapPropsToValues: () => ({ email: '' }),

    // Custom sync validation
    validate: values => {
        const errors = {};

        if (!values.email) {
            errors.email = 'Required';
        }

        return errors;
    },

    handleSubmit: (values, { props, setSubmitting }) => {
        // setTimeout(() => {
        //     alert(JSON.stringify(values, null, 2));
        //     setSubmitting(false);
        // }, 1000);
        console.log(values);
        props.logIn(values.email, values.password, values.rememberMe);
    },

    displayName: 'BasicForm',
})(MyForm);
const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default compose(
    connect(mapStateToProps, {logIn}),
)(LoginContainer);
