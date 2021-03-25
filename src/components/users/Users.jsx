import React from 'react';
import style from "./Users.module.css";
import img from "../../img/no-avatar.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {usersAPI} from "../../api/api";


let Users = (props) => {
    console.log(props)
    return (
        <div>
            <div className={style.paginate}>
                { props.getPaginate() }

            </div>
            <div className={style.items}>
                {
                    props.users.map(u => (
                        <div key={u.id} className={style.item}>
                        <span>
                            <NavLink to={'/profile/' + u.id}>
                                <div>
                                    <img className="user-img" src={ u.photos.small != null ? u.photos.small : img}/>
                                </div>
                            </NavLink>

                            <div>
                                { u.followed
                                    ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                        props.unfollow(u.id);
                                        // usersAPI.unfollow(u.id)
                                        //     .then(response => {
                                        //         console.log(response);
                                        //         if(response.data.resultCode == 0) {
                                        //             props.unfollow(u.id);
                                        //         }
                                        //         props.toggleFollowingProgress(u.id);
                                        //     });
                                    }}>unFollow</button>
                                    : <button disabled={props.followingInProgress.some(id => id === u.id)}  onClick={() => {
                                        props.follow (u.id);
                                        // usersAPI.follow(u.id)
                                        //     .then(response => {
                                        //         console.log(response);
                                        //         if(response.data.resultCode == 0) {
                                        //             props.follow(u.id);
                                        //         }
                                        //         props.toggleFollowingProgress(u.id);
                                        //     });

                                    }}>Follow</button>}
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
        </div>
    );
}

export default Users;