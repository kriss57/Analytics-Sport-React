import React, { useEffect, useState } from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts'

import { userService } from '../_services/user.service';

const BarChartComponent = () => {
    const [userActivity, setUserActivity] = useState([])

    useEffect(() => {
        console.log('useEffect');
        userService.getUserActivity(12)
            .then(res => {
                console.log(res.data.data.sessions)
                setUserActivity(res.data.data)
            })
            .catch(error => console.log(error))
    }, [])


    // const data = [ cree un mock a laplace
    //     {
    //         name: 'Page A',
    //         uv: 4000,
    //         pv: 2400,
    //         amt: 2400,
    //     },
    //     {
    //         name: 'Page B',
    //         uv: 3000,
    //         pv: 1398,
    //         amt: 2210,
    //     },
    //     {
    //         name: 'Page C',
    //         uv: 2000,
    //         pv: 3000,
    //         amt: 2290,
    //     },
    //     {
    //         name: 'Page D',
    //         uv: 2780,
    //         pv: 3908,
    //         amt: 2000,
    //     },
    //     {
    //         name: 'Page E',
    //         uv: 1890,
    //         pv: 9000,
    //         amt: 2181,
    //     },
    //     {
    //         name: 'Page F',
    //         uv: 2390,
    //         pv: 3800,
    //         amt: 2500,
    //     },
    //     {
    //         name: 'Page G',
    //         uv: 3490,
    //         pv: 4300,
    //         amt: 2100,
    //     },
    // ];


    return (
        <div className="BarChartConponent" style={{ padding: '20px' }}>

            <BarChart width={800}
                height={500}
                data={userActivity.sessions}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" tickFormatter={(date) => new Date(date).getDate().toString()} />
                <YAxis orientation="right" />
                <Tooltip />
                <Legend borderRadius={15} />
                <Bar dataKey="kilogram" fill="#282D30" name='Poids (kg)' barSize={7} radius={5} />
                <Bar dataKey="calories" fill="#E60000" name='Calories brûlées (kCal)' barSize={7} radius={5} />
            </BarChart>


        </div>

    );
};

export default BarChartComponent;