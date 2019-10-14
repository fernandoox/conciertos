import API from '../../commons/axios';

export const type = 'GET_ALL_CONCERTS';

const getConciertos = () => {
   return dispatch => {
      API.get('/concerts')
         .then(res => {
            dispatch({
               type,
               payload: res.data.data,
            })
         })
   }
};

export default getConciertos;