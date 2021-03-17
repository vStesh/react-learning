import React from 'react';

import {connect} from "react-redux";
import {follow, setCurrentPage, setUsers, setTotalUsersCount, unfollow, toggleIsFetching} from "../../redux/usersReducer";
import * as axios from "axios";
import style from "./Users.module.css";
import Users from "./Users";
import preloader from "./../../img/temp.gif";
import Preloader from "../Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            });
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
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
    }) (UsersContainer);