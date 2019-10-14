import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Page from './page';
import getDetalleConcierto from '../../redux/actions/getDetalleConcierto';

const Details = (props) => {

   const dispatch = useDispatch();
   const currentConcierto = useSelector(state => state.currentConcierto);

   useEffect(() => {
      const idConcertParam = props.match.params.itemId;
      dispatch(getDetalleConcierto(idConcertParam));
   }, [props, dispatch])

   const goTo = (path) => {
      props
         .history
         .push(path);
   }

   return (
      <Page concert={currentConcierto} goTo={goTo}/>
   );
}

export default Details;