import API from '../../commons/axios';

export const type = 'GET_CONCERT_BY_ID';

const getconciertoById = idConcierto => {
   return dispatch => {
      API.get(`/concerts/${idConcierto}`)
         .then(res => {
            dispatch({
               type,
               payload: res.data.data
            })
         })
   }
}

export default getconciertoById;