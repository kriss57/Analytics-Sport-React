import axios from 'axios'
import './mockData'

// for all user
let getMockAllUsers = () => {
    return axios.get('/user_main-data')
}
// for one user
let getMockUser = (uid) => {
    return axios.get('/user_main-data/userId', { params: { userId: uid } })
}
// getMockActivity for one user by id
let getMockActivity = (uid) => {
    //axios.get(url, {} en params = uid)
    return axios.get('/user_activity/userId', { params: { userId: uid } })
}
let getMockSessions = (uid) => {
    return axios.get('/user_average_sessions/userId', { params: { userId: uid } })
}
let getMockPerformance = (uid) => {
    return axios.get('/user_user-performance/userId', { params: { userId: uid } })
}
export const mockService = { getMockAllUsers, getMockUser, getMockActivity, getMockSessions, getMockPerformance }