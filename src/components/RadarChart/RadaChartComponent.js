import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';
import { userService } from '../../_services/user.service';
import './radarChartComponent.css'



const RadaChartComponent = ({ uid }) => {
    const [performance, setPerformance] = useState([])

    useEffect(() => {
        userService.getUserPerformance(parseInt(uid))
            .then(res => {
                console.log(res);
                setPerformance(res.data.data)
            })
            .catch(error => console.log(error))
    }, [uid])

    // ne pas oublier de verifier avec ?  IMPORTANT
    const mapeData = performance.data?.map(d => ({
        ...d,
        kind: performance.kind[d.kind]
    }))

    console.log(mapeData);
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

export default RadaChartComponent;