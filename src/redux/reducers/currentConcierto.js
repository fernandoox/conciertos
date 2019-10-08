const defaultState = {}

const reducer = (state = defaultState, {type, payload}) => {
   switch (type) {
      case 'GET_CONCERT_BY_ID': {
         return payload;
      }
      default:
         return state;
   }
}

export default reducer;