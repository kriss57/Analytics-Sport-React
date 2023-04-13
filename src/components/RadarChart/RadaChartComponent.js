import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';
import { userService } from '../../_services/user.service';
import ChartError from '../ChartError/ChartError';
import PropTypes from 'prop-types'

import './radarChartComponent.css'


/**
 * 
 @param {string} uid
 * @returns {JSX.Element} 
 */
const RadaChartComponent = ({ uid }) => {
    const [performance, setPerformance] = useState([])

    useEffect(() => {
        userService.getUserPerformance(parseInt(uid))
            .then(res => {
                setPerformance(res.data.data)
            })
            .catch(error => console.log(error))
    }, [uid])


    return (
        <div className='RadarChartComponent' style={{ position: 'relative' }}>
            <ChartError data={performance.data} />
            <ResponsiveContainer width="100%" height='100%'>
                <RadarChart cx="50%" cy="50%" margin={{ top: 20, right: 20, bottom: 20, left: 20 }} outerRadius="72%" data={performance.data}>
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis dataKey="kind" dy={5} tickSize={13} stroke='#FFF' tickLine={false} />
                    <Radar name="performance" dataKey="value" fill="red" fillOpacity={0.5} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
};

RadaChartComponent.prototype = {
    uid: PropTypes.string.isRequired
}

export default RadaChartComponent;