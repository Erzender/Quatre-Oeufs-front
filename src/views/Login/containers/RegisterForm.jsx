import { connect } from 'react-redux';

import RegisterForm from '../components/RegisterForm';
import { validateRegisterForm } from '../../../actions/register';

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

/* import { connect } from "react-redux";

import HomeCpt from "../Components/HomeCpt";

const mapStateToProps = state => ({
  token: state.persistency.token,
  resettingMap: state.domain.isFetching
});

const mapDispatchToProps = dispatch => ({
});

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeCpt);

export default Home; */
