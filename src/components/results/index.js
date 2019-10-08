import React, {Fragment, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Page from './page';
import SearchBar from "../searchBar";
import getConciertos from '../../redux/actions/getConciertos';
import {Grid} from 'semantic-ui-react';

const Results = ({history}) => {

   const dispatch = useDispatch();
   const conciertos = useSelector(state => state.conciertos)
   console.log(conciertos)
   useEffect(() => {
      dispatch(getConciertos());
   }, [dispatch])

   const goTo = (path) => {
      history.push(path);
   }

   return (
      <Fragment>
         <Grid centered columns={3}>
            <Grid.Column>
               <SearchBar generos={conciertos.map(concierto => concierto.genre)}/>
            </Grid.Column>
         </Grid>
         <Grid centered columns={3}>
            <Grid.Column>
               <Page conciertosList={conciertos} goTo={goTo}/>
            </Grid.Column>
         </Grid>
      </Fragment>
   );
}

export default Results;