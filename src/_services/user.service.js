import Axios from './caller.service'
import axios from 'axios'
import './mockData'

const isDev = process.env.REACT_APP_NODE_ENV === 'dev-mod'

let getAllUsers = () => {
    return Axios.get('/user_main-data')
}

let getUser = (userId) => {
    if (isDev) {
        return Axios.get('/user_main-data/userId', { params: { userId: userId } })
    } else {
        return Axios.get(`/user/${userId}`)
    }
}

let getUserActivity = (userId) => {
    if (isDev) {
        return Axios.get('/user_activity/userId', { params: { userId: userId } })
    } else {
        return Axios.get(`/user/${userId}/activity`)
    }

}

let getUserAverageSessions = (userId) => {
    if (isDev) {
        return Axios.get('/user_average_sessions/userId', { params: { userId: userId } })
    } else {
        return Axios.get(`/user/${userId}/average-sessions`)
    }


}

let getUserPerformance = (userId) => {
    if (isDev) {
        return Axios.get('/user_user-performance/userId', { params: { userId: userId } })
    } else {
        return Axios.get(`/user/${userId}/performance`)
    }

}
export const userService = { getAllUsers, getUser, getUserActivity, getUserAverageSessions, getUserPerformance }