import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types'

import './pieChartComponent.css'

/**
 * 
 * @param {string} uid
 * @returns template
 */
const PieChartComponent = ({ uid }) => {

    const data = [
        { name: 'Group A', value: 1500 },

    ];

    return (
        <div className='PieChartComponent'>
            <h3 className='perf-title' >Score</h3>
            <ResponsiveContainer width='100%' height={220}>
                <PieChart width={800} height={400} >
                    <Pie
                        data={data}
                        cx={100}
                        cy={80}
                        startAngle={70}
                        endAngle={200}
                        innerRadius={70}
                        outerRadius={79}
                        fill="red"
                        dataKey="value"
                        cornerRadius={15}
                    >
                        <Cell stroke='' fill='red' />
                    </Pie>
                </PieChart>

            </ResponsiveContainer>
            <div className="score"></div>

        </div>
    );
};

PieChartComponent.prototype = {
    uid: PropTypes.string.isRequired
}

export default PieChartComponent;