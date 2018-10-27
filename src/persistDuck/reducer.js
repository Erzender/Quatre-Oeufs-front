import locales from '../resources/locales';

const initialState = {
  dictionnary: locales.fr,
};

const persist = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default persist;
