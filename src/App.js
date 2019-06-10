import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Sneaker from './Sneaker/Sneaker';
import Sneakers from './Sneakers/Sneakers';
import Brand from './Brand/Brand';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch)

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Route exact path='/' component={Sneakers}/>
        <Route exact path='/sneaker/:sneakerId' component={Sneaker}/>
        <Route exact path='/brand/:brandId' component={Brand}/>
      </div>
    );
  }
}

export default App;