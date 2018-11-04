import React from 'react';

const RegisterForm = props => (
  //   <div style={styles.container}>
  <div>
    <label htmlFor="email">
      <b>Email</b>
      <input type="text" placeholder="Enter Email" name="email" required />
    </label>
    <label htmlFor="psw">
      <b>Password</b>
      <input type="password" placeholder="Enter Password" name="psw" required />
    </label>
    <label htmlFor="psw-repeat">
      <b>Repeat Password</b>
      <input type="password" placeholder="Repeat Password" name="psw-repeat" required />
    </label>
    <hr />
    <p>
      By creating an account you agree to our
      {' '}
      <a href="https://policies.google.com/privacy?hl=en&gl=ZZ">Terms & Privacy</a>
.
    </p>
    <button type="submit" className="registerbtn" onClick={props.onValidateRegisterForm}>
      Register
    </button>
  </div>
);

export default RegisterForm;
