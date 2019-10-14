import React, {Fragment, useState} from 'react';
import {Container, Segment, Menu} from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

const Main = (props) => {
   const {children} = props;
   const currentLocation = props.location.pathname;
   const [activeItem,setActiveItem] = useState(currentLocation);
  
   const handleItemClick = (e, {name}) => {
      setActiveItem(name);
      props.history.push(name);
   }

   return (
      <Fragment>
         <Segment inverted style={{ borderRadius: 0 }}>
            <Menu inverted secondary style={{ borderRadius: 0 }}>
               <Menu.Item
                  name='concerts'
                  active={activeItem === '/concerts'}
                  onClick={(e, name) => handleItemClick(e, name)}>
                  Todos los conciertos
               </Menu.Item>
               <Menu.Item
                  name='new-concert'
                  active={activeItem === '/new-concert'}
                  onClick={(e, name) => handleItemClick(e, name)}>
                  Nuevo concierto
               </Menu.Item>
               <Menu.Item
                  name='mis_conciertos'
                  active={activeItem === '/mis_conciertos'}
                  onClick={(e, name) => handleItemClick(e, name)}>
                  Mis conciertos
               </Menu.Item>
            </Menu>
         </Segment>

         <Container>
            {children}
         </Container>
      </Fragment>
   )
}

export default withRouter(Main);