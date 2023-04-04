import axios from "axios";


// dotenv ne fonctionne pas A VOIR

console.log(process.env.REACT_APP_NODE_ENV)
console.log(process.env.REACT_APP_API_URL);
const isDev = process.env.REACT_APP_NODE_ENV === 'dev-mod'
const url = !isDev ? process.env.REACT_APP_MOCK_URL : process.env.REACT_APP_API_URL

if (isDev) {
    console.log(url);
    console.log('en devlopment');
}

const Axios = axios.create()

Axios.interceptors.response.use(response => {
    console.log(response);
    //Formatted date
    if (response.config.url.includes('/user_activity/')) {
        const formatedDate = response.data.sessions.map((session) => ({
            ...session,
            day: new Date(session.day).getDate().toString()
        }))
        response.data.sessions = formatedDate
    }
    return response
})

export default Axios