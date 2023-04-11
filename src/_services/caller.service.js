import axios from "axios";

const isDev = process.env.REACT_APP_NODE_ENV === 'dev-mod'
const url = isDev ? process.env.REACT_APP_MOCK_URL : process.env.REACT_APP_API_URL


// ici ajouté l url pour les appels axios
const Axios = axios.create({
    baseURL: url
})

Axios.interceptors.request.use(request => {
    console.log(request);

    return request
})

Axios.interceptors.response.use(response => {
    console.log(response.config.url);
    //Formatted date
    if (response.config.url.includes('activity')) {
        const formatedDate = response.data.data.sessions.map((session) => ({
            ...session,
            day: new Date(session.day).getDate().toString()
        }))
        response.data.data.sessions = formatedDate
    }
    return response
})


export default Axios