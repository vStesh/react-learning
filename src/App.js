import React from 'react'
import './App.css';
import Header from './components/header/Header';
import Profile from './components/profile/Profile';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Dialogs from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import Settings from "./components/settings/Settings";
import News from "./components/news/News";


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
                             addPost={props.addPost}
                             updateNewPostText={props.updateNewPostText}
                         /> }/>
                  <Route path='/messages'
                         render={ () => <Dialogs
                             state={props.state.messagePage}/> }/>
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
