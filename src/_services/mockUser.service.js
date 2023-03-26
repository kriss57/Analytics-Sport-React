import axios from 'axios'
import './mockData'

// for all user
let getMockUser = () => {
    return axios.get('/user_main-data')
}
// getMockActivity for one user by id
let getMockActivity = (uid) => {
    //axios.get(url, {} en params = uid)
    return axios.get('/user_activity/userId', { params: { userId: uid } })
}
let getMockSeesions = () => {
    return axios.get('/user_average_sessions')
}
let getMockPerformance = () => {
    return axios.get('/user_user-performance')
}
export const mockService = { getMockUser, getMockActivity, getMockSeesions, getMockPerformance }