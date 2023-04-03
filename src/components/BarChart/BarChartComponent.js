import React, { useEffect, useState } from 'react';
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts'
//import { userService } from '../_services/user.service';
import { mockService } from '../../_services/mockUser.service';
import PropTypes from 'prop-types'
import './barChartComponent.css'

const BarChartComponent = ({ uid }) => {
    const [mockActivity, setMockActivity] = useState([])

    useEffect(() => {
        mockService.getMockActivity(parseInt(uid))
            .then(res => {
                setMockActivity(res.data)
            })
            .catch(error => console.log(error))
    }, [uid])

    const legendItems = [
        { value: 'Poids (kg)', color: "#282D30", style: { marginRight: '50px' } },
        { value: 'Calories brûlées (kCal)', color: "#E60000", style: { marginRight: '50px' } }
    ]

    // const customTitle = (props) => {
    //     const { payload } = props
    //     return (
    //         <div className="customTitle">
    //             <span>{payload.value}</span>
    //             <br />
    //             <span>{payload.value}</span>
    //         </div>

    //     )
    // }

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
                    <XAxis dataKey="day" tickFormatter={(date) => new Date(date).getDate().toString()} />
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