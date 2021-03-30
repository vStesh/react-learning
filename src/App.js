import React from 'react'
import './App.css';
import ProfileContainer from './components/profile/ProfileContainer';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import {Route, withRouter} from 'react-router-dom';
import Settings from "./components/settings/Settings";
import News from "./components/news/News";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/Login/Login";
import LoginContainer from "./components/Login/LoginContainer";
import {connect} from "react-redux";
import {getAuthUserData} from "./redux/authReducer";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/Preloader";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if(!this.props.initialized) {
            return <Preloader />
        }
        return (

            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-content">

                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer/>}/>
                    <Route path='/messages'
                           render={() => <DialogsContainer/>}/>
                    <Route path='/news'
                           render={() => <News/>}/>
                    <Route path='/settings'
                           render={() => <Settings/>}/>
                    <Route path='/users'
                           render={() => <UsersContainer/>}/>
                    <Route path='/login'
                           render={() => <LoginContainer/>}/>

                </div>
                <Footer/>

            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
});

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
