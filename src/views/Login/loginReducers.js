import { VALIDATE_REGISTER_FORM } from './loginActions';

const initialState = {
  register: {
    name: '',
    psw: '',
    psw_repeat: '',
  },
};

const register = (state = initialState, action = {}) => {
  switch (action.type) {
    case VALIDATE_REGISTER_FORM:
      return Object.assign({}, state, { form: action.payload.form });
    default:
      return state;
  }
};

export default register;
