import React, { useEffect, useState } from 'react';
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts'
import { userService } from '../../_services/user.service'
import PropTypes from 'prop-types'
import './barChartComponent.css'
/**
 * 
 * @param {string} uid
 * @returns template 
 */
const BarChartComponent = ({ uid }) => {
    const [mockActivity, setMockActivity] = useState([])

    useEffect(() => {
        userService.getUserActivity(parseInt(uid))
            .then(res => {
                setMockActivity(res.data.data)
            })
            .catch(error => console.log(error))
    }, [uid])

    const legendItems = [
        { value: 'Poids (kg)', color: "#282D30", style: { marginRight: '50px' } },
        { value: 'Calories brûlées (kCal)', color: "#E60000", style: { marginRight: '50px' } }
    ]


    return (
        <div className="BarChartConponent" >
            <h3 className='activity-title' >Activité quotidienne</h3>
            <ResponsiveContainer width='100%' >
                <BarChart
                    data={mockActivity.sessions}
                    margin={{
                        top: 20,
                        right: 0,
                        left: 0,
                        bottom: 5,
                    }}>
                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                    <XAxis dataKey="day" tickFormatter={mockActivity.day} />
                    <YAxis orientation="right" />
                    <Tooltip />
                    <Legend payload={legendItems} verticalAlign="top" height={60} iconType='circle' iconSize={6} align='right' itemMarginRight={60} />
                    <Bar dataKey="kilogram" fill="#282D30" name='Poids (kg)' barSize={7} radius={[5, 5, 0, 0]} />
                    <Bar dataKey="calories" fill="#E60000" name='Calories brûlées (kCal)' barSize={7} radius={[5, 5, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div >

    );
};

BarChartComponent.prototype = {
    uid: PropTypes.string.isRequired
}

export default BarChartComponent;