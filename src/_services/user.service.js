import axios from "axios"

let getUser = (userId) => {
    return axios.get(`http://localhost:8888/user/${userId}`)
}

let getUserActivity = (userId) => {
    return axios.get(`http://localhost:8888/user/${userId}/activity`)
}

let getUserAverageSessions = (userId) => {
    return axios.get(`http://localhost:8888/user/${userId}/average-sessions`)
}

let getUserPerformance = (userId) => {
    return axios.get(`http://localhost:8888/user/${userId}/performance`)
}
export const userService = { getUser, getUserActivity, getUserAverageSessions, getUserPerformance }