const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initState = {
    users : [
        {id: 1, followed: false, fullName: "Kate", status: 'Class', location: {country: 'Belarus', city: 'Minsk'}},
        {id: 2, followed: false, fullName: "Den", status: 'I am fine', location: {country: 'Ukraine', city: 'Kiev'}},
        {id: 3, followed: true, fullName: "John", status: 'Crazy', location: {country: 'Russia', city: 'Moscow'}},
        {id: 4, followed: true, fullName: "Lol", status: 'Looking for me', location: {country: 'USA', city: 'LA'}},

    ],
    newPostText: 'fdfd',
}

const usersReducer = (state = initState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_USERS:
            return { ...state, users: [ ...state, action.users ] };
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});


export default usersReducer;