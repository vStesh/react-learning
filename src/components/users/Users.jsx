import React from 'react';
import img from './../../img/no-avatar.png';
import * as axios from "axios";
import style from './Users.module.css';

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
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

        return (
            <div>
                <div className={style.paginate}>
                    { this.getPaginate() }

                </div>
                {
                    this.props.users.map(u => (<div key={u.id}>
                    <span>
                        <div>
                            <img className="user-img" src={ u.photos.small != null ? u.photos.small : img}/>
                        </div>
                        <div>
                            { u.followed ?
                                <button onClick={() => { this.props.unfollow(u.id)}}>unFollow</button>
                                :
                                <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                    </div> ))
                }
            </div>
        );
    }
}

export default Users;