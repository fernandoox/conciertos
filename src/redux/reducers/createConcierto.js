const defaultState = {};

const reducer = (state = defaultState, {type, payload}) => {
   switch (type) {
      case 'CREATE_CONCIERTO': {
         return payload;
      }
      default:
         return state;
   }
}

export default reducer
