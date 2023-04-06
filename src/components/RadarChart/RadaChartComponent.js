import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';
import { userService } from '../../_services/user.service';
import PropTypes from 'prop-types'

import './radarChartComponent.css'

/**
 * 
 * @param {string} uid
 * @returns template
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

    // ne pas oublier de verifier avec ?  IMPORTANT
    const mapeData = performance.data?.map(d => ({
        ...d,
        kind: performance.kind[d.kind]
    }))

    return (
        <div className='RadarChartComponent'>
            <ResponsiveContainer width="100%" height={220}>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={mapeData}>
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis dataKey="kind" dy={4} tickSize={17} />
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