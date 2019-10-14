import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Page from './page';
import createConcert from '../../redux/actions/createConcierto';

const NewConcierto = (props) => {

   const dispatch = useDispatch();
   const resSubmitConcert = useSelector(state => state.createConcierto);

   const submitConcert = (concertValues, formikApi) => {
      dispatch(createConcert(concertValues), () => {
         alert(resSubmitConcert.status);
      });
      formikApi.setSubmitting(false);
      //props.history.push('/concerts');
   }

   return (
      <React.Fragment>
         {resSubmitConcert.status}
         <Page submitConcert={submitConcert}/>
      </React.Fragment>
   )
}

export default NewConcierto;