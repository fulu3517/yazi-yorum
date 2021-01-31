import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import YaziListesi from './components/YaziListesi';
import YaziDetay from './components/YaziDetay';
import YaziEkle from "./components/YaziEkle";

function App() {

  return (
    <Router>
      <div className="main-wrapper">
        <header>

        </header>
        <div className="ui raised very padded text container segment">
          <Route exact path="/" component={YaziListesi}/>
          <Route path="/post/:id" component={YaziDetay}/>
          <Route path="/yazi-ekle" component={YaziEkle}/>
        </div>
      </div>
    </Router>
  );
}

export default App;
