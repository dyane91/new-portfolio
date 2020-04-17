import React from 'react';
import { Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGithub, faGgCircle, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';

import { Mainpage } from './components';
import './App.css';

library.add(fab, faGithub, faLinkedinIn, faGgCircle);
function App() {
  return (
    <div className="App" id="app">
      <Route exact path="/" component={Mainpage}/>
    </div>
  );
}

export default App;
