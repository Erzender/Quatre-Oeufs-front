import { connect } from 'react-redux';

import RegisterForm from '../components/RegisterForm';
import { validateRegisterForm } from '../loginActions';

const mapStateToProps = state => ({
  name: state.register.name,
  psw: state.register.psw,
  psw_repeat: state.register.psw_repeat,
});

const mapDispatchToProps = dispatch => ({
  onValidateRegisterForm: form => dispatch(validateRegisterForm(form)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterForm);
