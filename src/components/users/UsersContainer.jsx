import React from 'react';

import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    unfollow,
    toggleFollowingProgress,
    getUsers
} from "../../redux/usersReducer";

import style from "./Users.module.css";
import Users from "./Users";
import Preloader from "../Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);
    }
    getPaginate = () => {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        let flag = false;
        for (let i = 1; i <= pagesCount; i++) {
            if(i < 4 || i > (pagesCount - 3) || (this.props.currentPage - 3 < i && i < this.props.currentPage + 3)) {
                pages.push(i);
                flag = true;
            } else {
                if (flag) {
                    pages.push(0);
                    flag = false;
                }
            }

        }
        let render = pages.map(p => {
            if(p) {
                return <span className={ this.props.currentPage === p && style.selected}
                             onClick={(e) => { this.onPageChanged(p); }}>{p}</span>
            } else {
                return <b> ...</b>
            }

        });
        return render;
    }

    render() {

        return <>
            { this.props.isFetching ? <Preloader /> : null }
            <Users
                getPaginate={this.getPaginate}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
            />
        </>

    }
}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

// export default connect(mapStateToProps, {
//     follow,
//     unfollow,
//     setCurrentPage,
//     toggleFollowingProgress,
//     getUsers
//     }) (UsersContainer);

export default compose (
    // withAuthRedirect,
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers
    })
)(UsersContainer);