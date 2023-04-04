//import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import Axios from './caller.service'

import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../_utils/mock'

// New instance of axios-mock-adapter
const mock = new MockAdapter(Axios)

// Simulation of request "get" for all endpoints
// "use methodes (onGet(url).reply(satus,content for response))"
// mock.onGet all users 
mock.onGet('/user_main-data').reply(200, USER_MAIN_DATA)
// mock.onGet user by id
mock.onGet(`/user_main-data/userId`).reply((config) => {
    const userData = USER_MAIN_DATA.find((user) => user.id === config.params.userId)
    return [200, userData]
})
// mock.onGet activity by id
mock.onGet(`/user_activity/userId`).reply((config) => {
    const userActivity = USER_ACTIVITY.find((act) => act.userId === config.params.userId)
    return [200, userActivity]
})

mock.onGet(`/user_average_sessions/userId`).reply((config) => {
    const userSessions = USER_AVERAGE_SESSIONS.find((session) => session.userId === config.params.userId)
    return [200, userSessions]
})

mock.onGet(`/user_user-performance/userId`).reply((config) => {
    const userPerform = USER_PERFORMANCE.find((perf) => perf.userId === config.params.userId)
    return [200, userPerform]
})
//mock.onGet('/user_average_sessions').reply(200, USER_AVERAGE_SESSIONS)


//mock.onGet('/user_user-performance').reply(200, USER_PERFORMANCE)