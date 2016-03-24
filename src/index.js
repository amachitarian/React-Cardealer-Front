import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import App from './App';
import Home from './Home';
import CardealerList from './CardealerList';
import Cardealer from './Cardealer';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/cardealerlist" component={CardealerList} />
      <Route path="/cardealer/:cardealerId" component={Cardealer}/>
    </Route>
  </Router>
), document.getElementById('root'));
