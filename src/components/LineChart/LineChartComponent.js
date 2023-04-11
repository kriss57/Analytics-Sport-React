import React from 'react';
import { LineChart, XAxis, Tooltip, Line, ResponsiveContainer, YAxis } from 'recharts';
import { useEffect, useState } from 'react';
import { userService } from '../../_services/user.service'
import PropTypes from 'prop-types'

import './lineChartComponent.css'

/**
 * 
 * @param {string} uid
 * @returns {JSX.Element} 
 */
const LineChartComponent = ({ uid }) => {

    const [sessions, setSessions] = useState([])

    useEffect(() => {
        userService.getUserAverageSessions(parseInt(uid))
            .then(res => {
                setSessions(res.data.data)
            })
            .catch(error => console.log(error))
    }, [uid])

    // formatage a isoler
    const semaine = ['  L', 'M', 'M', 'J', 'V', 'S', 'D  ']
    const mapeData = sessions.sessions?.map(s => ({
        ...s,
        day: semaine[s.day - 1]

    }))

    const customToolTip = ({ active, payload, label }) => {

        if (active && payload) {
            let duration = payload[0]['value']
            return (
                <div className="custom_lineChart_toolTip">
                    <p className='label'>{duration}min</p>
                </div>
            )
        }
        return null
    }

    return (
        <div className="LineChartComponent">
            <h3 className='title'>Durée moyenne des sessions</h3>
            <ResponsiveContainer width="100%" height={220}>
                <LineChart
                    data={mapeData}
                    margin={{ top: 0, bottom: 0, left: 0, right: 0 }} >
                    <YAxis axisLine={false} hide={true} />
                    <XAxis dataKey="day" ticks={10} interval='preserveStartEnd' padding={{ left: 0, right: 0 }} axisLine={false} tickLine={false} tick={{ fill: "#FFFFFF" }} />
                    <Tooltip content={customToolTip} />
                    <Line dot={false} type="monotone" dataKey="sessionLength" stroke="#FFFFFF" />

                </LineChart>
            </ResponsiveContainer>
        </div>

    );
};

LineChartComponent.prototype = {
    uid: PropTypes.string.isRequired
}

export default LineChartComponent;