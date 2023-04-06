// //import axios from 'axios'
// import Axios from './caller.service'
// import './mockData'


// //import Axios from './caller.service
// // je l importe ici et je change axios.get par Axios.get
// //une url pour api et mock a formatter dans l interceptor ******

// // for all user
// let getMockAllUsers = () => {
//     return Axios.get('/user_main-data')
// }
// // for one user
// let getMockUser = (uid) => {
//     return Axios.get('/user_main-data/userId', { params: { userId: uid } })
// }
// // getMockActivity for one user by id
// let getMockActivity = (uid) => {
//     //axios.get(url, {} en params = uid)
//     return Axios.get('/user_activity/userId', { params: { userId: uid } })
// }
// let getMockSessions = (uid) => {
//     return Axios.get('/user_average_sessions/userId', { params: { userId: uid } })
// }
// let getMockPerformance = (uid) => {
//     return Axios.get('/user_user-performance/userId', { params: { userId: uid } })
// }
// export const mockService = { getMockAllUsers, getMockUser, getMockActivity, getMockSessions, getMockPerformance }