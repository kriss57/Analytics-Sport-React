import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import Axios from './caller.service'

import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../_utils/mock'

// New instance of axios-mock-adapter
const isDev = process.env.REACT_APP_NODE_ENV === 'dev-mod'
const mock = isDev ? new MockAdapter(Axios) : new MockAdapter(axios)
//const mock = new MockAdapter(Axios, { onNoMatch: 'passthrough' })

// Simulation url for request "get" for all endpoints

/**
 * mock url all users 
 */
mock.onGet('/user_main-data').reply(200, USER_MAIN_DATA)
// 
/**
 * mock url user by id
 */
mock.onGet(`/user_main-data/userId`).reply((config) => {
    const userData = USER_MAIN_DATA.find((user) => user.id === config.params.userId)
    return [200, { data: userData }]
})

/**
 * mock url user's activity 
 */
mock.onGet(`/user_activity/userId`).reply((config) => {
    const userActivity = USER_ACTIVITY.find((act) => act.userId === config.params.userId)
    return [200, { data: userActivity }]
})
/**
 * mock url user's sessions 
 */
mock.onGet(`/user_average_sessions/userId`).reply((config) => {
    const userSessions = USER_AVERAGE_SESSIONS.find((session) => session.userId === config.params.userId)
    return [200, { data: userSessions }]
})
/**
 * mock url user's performance 
 */
mock.onGet(`/user_user-performance/userId`).reply((config) => {
    const userPerform = USER_PERFORMANCE.find((perf) => perf.userId === config.params.userId)
    return [200, { data: userPerform }]
})
