import React from 'react';
import { LineChart, XAxis, Tooltip, Line, ResponsiveContainer, YAxis } from 'recharts';
import { useEffect, useState } from 'react';
import { userService } from '../../_services/user.service'

import './lineChartComponent.css'

const LineChartComponent = ({ uid }) => {

    const [sessions, setSessions] = useState([])

    useEffect(() => {
        userService.getUserAverageSessions(parseInt(uid))
            .then(res => {
                setSessions(res.data.data)
            })
            .catch(error => console.log(error))
    }, [uid])

    const semaine = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
    const mapeData = sessions.sessions?.map(s => ({
        ...s,
        day: semaine[s.day - 1]

    }))
    console.log(mapeData);


    return (
        <div className="LineChartComponent">
            <h3 className='title'>Durée moyenne des sessions</h3>
            <ResponsiveContainer width="100%" height={220}>

                <LineChart
                    data={mapeData}
                    margin={{ top: 0, bottom: 0, left: 0, right: 0 }}>
                    <YAxis axisLine={false} hide={true} />
                    <XAxis dataKey="day" ticks={10} interval='preserveStartEnd' padding={{ left: 0, right: 0 }} axisLine={false} tickLine={false} />
                    <Tooltip />
                    <Line dot={false} type="monotone" dataKey="sessionLength" stroke="#8884d8" />
                </LineChart>
            </ResponsiveContainer>
        </div>

    );
};

export default LineChartComponent;