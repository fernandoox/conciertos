import React, {Fragment} from 'react';
import {Card, Icon, Image, Button } from 'semantic-ui-react';

const Page = (props) => {
   const {conciertosList, goTo} = props;
   return (
      <Fragment>
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
                           <span>{concert.likes} Likes</span>
                        </Button>
                     </div>
                  </Card.Content>
               </Card>
            )
         })}
      </Fragment>
   )
}

export default Page;