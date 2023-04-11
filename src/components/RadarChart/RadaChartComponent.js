import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';
import { userService } from '../../_services/user.service';
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


    //formated kind in french and uppercase
    const kindTrad = { 1: 'Cardio', 2: 'Energie', 3: 'Endurance', 4: 'Force', 5: 'Vitesse', 6: 'Intensité' }
    // Formated await data
    const mapeData = performance.data?.map(d => ({
        ...d,
        kind: kindTrad[d.kind]

    }))
    // reversed data
    const data = mapeData?.reverse()

    return (
        <div className='RadarChartComponent'>
            <ResponsiveContainer width="100%" height='100%'>
                <RadarChart cx="50%" cy="50%" margin={{ top: 20, right: 20, bottom: 20, left: 20 }} outerRadius="72%" data={data}>
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