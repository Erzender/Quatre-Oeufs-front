import { VALIDATE_REGISTER_FORM } from './loginActions';

const initialState = {};

const register = (state = initialState, action = {}) => {
  switch (action.type) {
    case VALIDATE_REGISTER_FORM:
      console.log('register VALIDATE_REGISTER_FORM ');
      return Object.assign({}, state, { form: action.payload.form });
    default:
      return state;
  }
};

export default register;
