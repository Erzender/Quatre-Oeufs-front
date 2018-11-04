import React from 'react';
import PropTypes from 'prop-types';

import { Field, reduxForm } from 'redux-form';

let RegisterForm = ({ onValidateRegisterForm }) => (
  <form onSubmit={onValidateRegisterForm}>
    <div>
      <b>Email</b>
      <Field name="email" component="input" type="text" placeholder="Enter Email" required />
    </div>
    <b>Password</b>
    <Field name="psw" component="input" type="password" placeholder="Enter Password" required />
    <div>
      <b>Repeat Password</b>
      <Field
        component="input"
        type="password"
        placeholder="Repeat Password"
        name="psw-repeat"
        required
      />
      <hr />
      <p>
        By creating an account you agree to our
        {' '}
        <a href="https://policies.google.com/privacy?hl=en&gl=ZZ">Terms & Privacy</a>
.
      </p>
      <button type="submit" className="registerbtn">
        Register
      </button>
    </div>
  </form>
);

RegisterForm.propTypes = {
  onValidateRegisterForm: PropTypes.func.isRequired,
};

const reduxRegisterForm = reduxForm({ form: 'register' })(RegisterForm);

export default reduxRegisterForm;
// export default RegisterForm;
