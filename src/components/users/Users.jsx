import React from 'react';
import img from './../../img/no-avatar.png';

let Users = (props) => {

    if(props.users.length === 0) {
        props.setUsers([
                {id: 1, followed: false, fullName: "Kate", status: 'Class', location: {country: 'Belarus', city: 'Minsk'}},
                {id: 2, followed: false, fullName: "Den", status: 'I am fine', location: {country: 'Ukraine', city: 'Kiev'}},
                {id: 3, followed: true, fullName: "John", status: 'Crazy', location: {country: 'Russia', city: 'Moscow'}},
                {id: 4, followed: true, fullName: "Lol", status: 'Looking for me', location: {country: 'USA', city: 'LA'}},
            ]
        );
    }
    return (
        <div>
            {
                props.users.map(u => (<div key={u.id}>
                    <span>
                        <div>
                            <img className="user-img" src={img}/>
                        </div>
                        <div>
                            { u.followed ?
                            <button onClick={() => { props.unfollow(u.id)}}>unFollow</button>
                            :
                            <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div> ))
            }
        </div>
    );
}

export default Users;