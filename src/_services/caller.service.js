import axios from "axios";

const isDev = process.env.REACT_APP_NODE_ENV === 'dev-mod'
const url = isDev ? process.env.REACT_APP_MOCK_URL : process.env.REACT_APP_API_URL

if (isDev) {
    console.log(url);
    console.log('en devlopment');
}
// ici ajouté l url pour les appels axios
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