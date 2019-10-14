import API from '../../commons/axios';

export const type = 'CREATE_CONCIERTO';

const createConcert = (conciertoValues) => {
   return async dispatch => {
      await API.post('/concerts', conciertoValues)
         .then(res => {
            dispatch({
               type,
               payload: res.data,
            })
         })
         .catch(error =>{
            dispatch({
               type,
               payload: error,
            })
         })
   }
};

export default createConcert;