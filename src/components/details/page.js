import React from 'react';
import {Card, Icon, Image, Button} from 'semantic-ui-react';

const Page = (props) => {
   const {concert, goTo} = props;
   return (
      <React.Fragment>
         <Card fluid>
            <Image src={concert.url_photo_1}/>
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
                  <Button basic color='green' onClick={() => goTo('/results')}>
                     Regresar
                  </Button>
                  <Button basic color='blue'>
                     <Icon name='heart'/>
                     <span>{concert.likes} Likes</span>
                  </Button>
               </div>
            </Card.Content>
         </Card>
      </React.Fragment>
   )
}

export default Page;