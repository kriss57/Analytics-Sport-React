import axios from "axios";

const isDev = process.env.REACT_APP_NODE_ENV === 'dev-mod'
const url = isDev ? process.env.REACT_APP_MOCK_URL : process.env.REACT_APP_API_URL


// Init Axios instance 
const Axios = axios.create({
    baseURL: url
})


// Use the response interceptor for formatted data
Axios.interceptors.response.use(response => {
    const originalData = response.data.data
    //Formatted date for Barchart
    if (response.config.url.includes('activity')) {
        const formatedDate = originalData.sessions.map((session) => ({
            ...session,
            day: new Date(session.day).getDate().toString()
        }))
        originalData.sessions = formatedDate
    }
    //Formatted day to string LinearChart
    if (response.config.url.includes('sessions')) {
        const semaine = ['  L', 'M', 'M', 'J', 'V', 'S', 'D  ']
        const formatedDay = originalData.sessions?.map(s => ({
            ...s,
            day: semaine[s.day - 1]

        }))
        originalData.sessions = formatedDay
    }

    //formated and converted kind in french and uppercase
    if (response.config.url.includes('performance')) {
        //formated kind in french and uppercase
        const kindTrad = { 1: 'Cardio', 2: 'Energie', 3: 'Endurance', 4: 'Force', 5: 'Vitesse', 6: 'Intensité' }

        const mapeData = originalData.data?.map(d => ({
            ...d,
            kind: kindTrad[d.kind]

        }))
        // reversed data
        const reverseData = mapeData?.reverse()
        originalData.data = reverseData
    }
    return response
})


export default Axios

