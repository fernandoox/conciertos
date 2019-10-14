import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import store from './redux/store';
import Results from './components/results';
import Details from './components/details';
import NewConcierto from './components/new_concierto';
import 'semantic-ui-css/semantic.min.css';
const Root = (
   <Provider store={store}>
      <BrowserRouter>
         <Switch>
            <Route path="/concerts" component={Results}/>
            <Route path="/concerts/:itemId" component={Details}/>
            <Route path="/new-concert" component={NewConcierto}/>
            <Redirect from="/" to="/results"/>
         </Switch>
      </BrowserRouter>
   </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));