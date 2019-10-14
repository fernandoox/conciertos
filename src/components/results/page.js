import React from 'react';
import {Grid, Card, Icon, Image, Button} from 'semantic-ui-react';
import Main from '../layout/main';

import SearchBar from './searchBar'
const Page = (props) => {
   const {conciertosList, goTo} = props;
   return (
      <Main>
         <Grid centered columns={3}>
            <Grid.Column>
               <SearchBar generos={conciertosList.map(concierto => concierto.genre)}></SearchBar>
               {conciertosList.map(concert => {
                  return (
                     <Card key={concert.id} fluid>
                        <Image src={`${concert.url_photo_1}?random=${concert.id}`}/>
                        <Card.Content>
                           <Card.Header>{concert.band}</Card.Header>
                           <Card.Meta>
                              <span className='date'>{concert.genre}</span>
                           </Card.Meta>
                           <Card.Description>
                              {concert.quote}
                           </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                           <div className='ui two buttons'>
                              <Button basic color='green' onClick={() => goTo(`/details/${concert.id}`)}>
                                 Ver mas
                              </Button>
                              <Button basic color='blue'>
                                 <Icon name='heart'/>
                                 <span>{concert.likes}
                                    Likes</span>
                              </Button>
                           </div>
                        </Card.Content>
                     </Card>
                  )
               })}
            </Grid.Column>
         </Grid>
      </Main>
   )
}

export default Page;