import React from 'react';
import Main from '../layout/main';
import {Header} from 'semantic-ui-react';
import {withFormik} from 'formik';
import {Button, Input, Form} from 'formik-semantic-ui';

const Page = (props) => {
   const {concert, submitConcert} = props;
   return (
      <Main>
         <Header>Nuevo concierto</Header>
         <Form
            initialValues={concert}
            onSubmit={(values, formikApi) => submitConcert(values, formikApi)}>
            <Input fluid type="text" name="band" label="Band"/>
            <Input type="text" name="place" label="Place"/>
            <Input type="text" name="genre" label="Genre"/>
            <Input type="text" name="quote" label="Quote"/>
            <Input type="text" name="url_photo_1" label="Photo 1"/>
            <Input type="text" name="url_photo_2" label="Photo 2"/>
            <Button.Submit>Submit</Button.Submit>
            <Button.Reset>Cancel</Button.Reset>
         </Form>
      </Main>
   )
}

Page.defaultProps = {
   concert: {
      band: '',
      place: '',
      genre: '',
      quote: '',
      url_photo_1: 'http://loremflickr.com/450/300/music',
      url_photo_2: 'http://loremflickr.com/450/300/music/all'
   }
}

export default withFormik({})(Page);