import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Page from './page';
import getConciertos from '../../redux/actions/getConciertos';

const Results = ({history}) => {

   const dispatch = useDispatch();
   const conciertos = useSelector(state => state.conciertos)

   useEffect(() => {
      dispatch(getConciertos());
   }, [dispatch])

   const goTo = (path) => {
      history.push(path);
   }

   return (
      <Page conciertosList={conciertos} goTo={goTo}/>
   );
}

export default Results;