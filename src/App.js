import React from 'react'
import './App.css';
import Header from './components/header/Header';
import Profile from './components/profile/Profile';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import Settings from "./components/settings/Settings";
import News from "./components/news/News";
import DialogsContainer from "./components/dialogs/DialogsContainer";


function App(props) {

  return (
      <BrowserRouter>
          <div className="app-wrapper">
              <Header />
              <Navbar />
              <div className="app-content">

                  <Route path='/profile'
                         render={ () => <Profile
                                             state={props.state.profilePage}
                                             dispatch={props.dispatch}
                                             store={props.store}
                                         /> }/>
                  <Route path='/messages'
                         render={ () => <DialogsContainer
                                            store={props.store}
                                        /> }/>
                  <Route path='/news'
                         render={ () => <News /> }/>
                  <Route path='/settings'
                         render={ () => <Settings /> }/>
              </div>
              <Footer />

          </div>
      </BrowserRouter>
  );
}

export default App;
