import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import YaziListesi from './components/YaziListesi';
import YaziDetay from './components/YaziDetay';

function App() {

  return (
    <Router>
      <div className="main-wrapper">
        <header>

        </header>
        <div className="ui raised very padded text container segment">
        <div className="ui relaxed divided list">
          <Route exact path="/" component={YaziListesi}/>
          <Route path="/post/:id" component={YaziDetay}/>
        </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
