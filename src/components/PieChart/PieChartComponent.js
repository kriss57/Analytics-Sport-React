import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types'
import { userService } from '../../_services/user.service';
import ChartError from '../ChartError/ChartError';

import './pieChartComponent.css'

/**
 * 
 * @param {string} uid
 * @returns template
 */
const PieChartComponent = ({ uid }) => {
    const [score, setScore] = useState({})

    useEffect(() => {
        userService.getUser(parseInt(uid))
            .then((res) => {
                setScore(res.data.data)
            })
            .catch(err => console.log(err))
    }, [uid])

    // formated data
    const data = [{
        name: 'score',
        value: score.score || score.todayScore
    }, {
        name: 'empty',
        value: 1 - score.score || 1 - score.todayScore
    }]


    return (
        <div className='PieChartComponent' style={{ position: 'relative' }}>
            <ChartError data={data[0]} />
            <h2 className='perf-title' >Score</h2>
            <ResponsiveContainer width='100%' height={220}>
                <PieChart width={800} height={400} >
                    <Pie
                        data={data}
                        cx='50%'
                        cy='50%'
                        startAngle={-280}
                        endAngle={280}
                        innerRadius={90}
                        outerRadius={100}
                        fill="white"
                        dataKey="value"
                        cornerRadius={15}
                    >
                        <Cell stroke='' fill='red' />
                    </Pie>
                </PieChart>

            </ResponsiveContainer>
            <div className="score" style={{ width: '60px' }}><span style={{ fontSize: '24px', fontWeight: 700 }}>{score.score ? score.score * 100 : score.todayScore * 100}% </span> de votre objectif</div>

        </div>
    );
};

PieChartComponent.prototype = {
    uid: PropTypes.string.isRequired
}

export default PieChartComponent;