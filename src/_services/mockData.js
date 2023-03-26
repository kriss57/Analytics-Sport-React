import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../_utils/mock'

// New instance of axios-mock-adapter
const mock = new MockAdapter(axios)

// Simulation of request "get" for all endpoints
// "use methodes (onGet(url).reply(satus,content for response))"
mock.onGet('/user_main-data').reply(200, USER_MAIN_DATA)
// mock.onGet by id
mock.onGet(`/user_activity/userId`).reply((config) => {
    const userActivity = USER_ACTIVITY.find((act) => act.userId === config.params.userId)
    return [200, userActivity]
})

mock.onGet('/user_average_sessions').reply(200, USER_AVERAGE_SESSIONS)
mock.onGet('/user_user-performance').reply(200, USER_PERFORMANCE)