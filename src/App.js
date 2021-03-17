import React from 'react'
import './App.css';
import ProfileContainer from './components/profile/ProfileContainer';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import {Route} from 'react-router-dom';
import Settings from "./components/settings/Settings";
import News from "./components/news/News";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import HeaderContainer from "./components/header/HeaderContainer";


function App(props) {

  return (

          <div className="app-wrapper">
              <HeaderContainer />
              <Navbar />
              <div className="app-content">

                  <Route path='/profile/:userId?'
                         render={ () => <ProfileContainer /> }/>
                  <Route path='/messages'
                         render={ () => <DialogsContainer /> }/>
                  <Route path='/news'
                         render={ () => <News /> }/>
                  <Route path='/settings'
                         render={ () => <Settings /> }/>
                  <Route path='/users'
                         render={ () => <UsersContainer /> }/>

              </div>
              <Footer />

          </div>

  );
}

export default App;
