import Axios from './caller.service'
import axios from 'axios'
import './mockData'

const isDev = process.env.REACT_APP_NODE_ENV === 'dev-mod'
/**
 * Recovering all users
 * ---If is mod dev use axios and not Axios instance 
 * @returns {Promise}
 */
let getAllUsers = () => {
    if (isDev) {
        return Axios.get('/user_main-data')
    } else {
        return axios.get('/user_main-data')
    }

}
/**
 * Recovering one user
 * @param {number} userId 
 * @returns {promise}
 */
let getUser = (userId) => {
    if (isDev) {
        return Axios.get('/user_main-data/userId', { params: { userId: userId } })
    } else {
        return Axios.get(`/user/${userId}`)
    }
}
/**
 * Recovering user's activity data
 * @param {number} userId 
 * @returns {promise}
 */
let getUserActivity = (userId) => {
    if (isDev) {
        return Axios.get('/user_activity/userId', { params: { userId: userId } })
    } else {
        return Axios.get(`/user/${userId}/activity`)
    }

}
/**
 * Recovering user's sessions data
 * @param {number} userId 
 * @returns {promise}
 */
let getUserAverageSessions = (userId) => {
    if (isDev) {
        return Axios.get('/user_average_sessions/userId', { params: { userId: userId } })
    } else {
        return Axios.get(`/user/${userId}/average-sessions`)
    }


}
/**
 * Recovering user's performance data
 * @param {number} userId 
 * @returns {promise}
 */
let getUserPerformance = (userId) => {
    if (isDev) {
        return Axios.get('/user_user-performance/userId', { params: { userId: userId } })
    } else {
        return Axios.get(`/user/${userId}/performance`)
    }

}
export const userService = { getAllUsers, getUser, getUserActivity, getUserAverageSessions, getUserPerformance }