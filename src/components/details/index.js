import React, {Fragment, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Page from './page';
import getDetalleConcierto from '../../redux/actions/getDetalleConcierto';
import {Grid} from 'semantic-ui-react';

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
      <Fragment>
         <Grid centered columns={2}>
            <Grid.Column>
               <Page concert={currentConcierto} goTo={goTo}/>
            </Grid.Column>
         </Grid>
      </Fragment>
   );
}

export default Details;