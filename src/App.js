import React from 'react';
import './App.scss';
import Container from '@material-ui/core/Container';
import {BrowserRouter ,Switch,Route} from "react-router-dom";
import FilmSearch from './film-components/film-search'
import FilmDetails from './film-components/film-details'
import NotFound from './film-components/not-found';


class App extends React.Component{

  componentDidMount() {
  }
  render(){
    return ( 
      <div className = "App" >
        <div className="navbar">
          <Container fixed >
          < img className = "img-fluid"
          alt = "logo brand nobo noir"
          src = {require('./images/nobo-logo.png')} /> 
          </Container> 
        </div> 
        <Container fixed className="content">
        <BrowserRouter>
          <Switch>
                <Route exact path='/' component={FilmSearch} />
                <Route exact path='/filmDetails' component={FilmDetails} />
                <Route path='*' exact={true} component={NotFound} />
          </Switch>
        </BrowserRouter>
        </Container>
      </div>
    );
  }

}

export default App;