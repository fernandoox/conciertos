const defaultState = [];

const reducer = (state = defaultState, {type, payload}) => {
   switch (type) {
      case 'GET_ALL_CONCERTS': {
         return payload;
      }
      case 'FILTER_CONCERTS_BY_GENRE': {
         return [...state.slice().filter( concert => concert.genre === payload ) ];
      }
      default:
         return state;
   }
}

export default reducer;