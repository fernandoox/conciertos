import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import Page from './page';
import getConciertosByGenre from '../../redux/actions/getConciertosByGenre';
import getConciertos from '../../redux/actions/getConciertos';

const SearchBar = ({generos}) => {

   const generosUniq = [ ...new Set(generos) ];
   
   const dispatch = useDispatch();
   const [genre, setGenre] = useState();
   
   const changeFilterGenre = (e, data) => {
      dispatch(getConciertosByGenre(data.value));
      setGenre(data.value);
   }

   const resetFilter = () => {
      dispatch(getConciertos());
   }

   return (
      <Page generos={generosUniq} handleChange={changeFilterGenre} genre={genre} resetFilter={resetFilter}/>
   )
}

export default SearchBar;