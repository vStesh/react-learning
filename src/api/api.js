import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "5cfbb577-5cd4-4fbc-9b48-1338ed788118"
    }
});

export const usersAPI = {
    getUsers (currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        console.warn('Obsolete method. Please use profileAPI object');
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userID) {
        return instance.get('profile/status/' + userID);
    },
    updateStatus(status) {
        return instance.put('profile/status/', {status: status});
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    logIn(email, password, rememberMe) {
        return instance.post('auth/login', {email, password, rememberMe});
    },
    logOut() {
        return instance.delete('auth/login');
    }

}
