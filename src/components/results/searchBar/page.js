import React, { Fragment } from 'react';
import { Segment, Dropdown, Button } from 'semantic-ui-react';

const Page = ({generos, handleChange, genre, resetFilter}) => {
   const optionsGeneros = generos.map(gen => {
      return {key: gen, value: gen, text: gen}
   })

   return(
      <Fragment>
         <Segment>
            <Dropdown  
               name='genre'
               selection
               placeholder='Filtrar por género' 
               options={optionsGeneros} 
               onChange={(e, data) => handleChange(e, data)}
               value={genre}
            />
            <Button primary floated='right' onClick={() => resetFilter()}>Ver todos</Button>
         </Segment>
      </Fragment>
   )
}

export default Page;