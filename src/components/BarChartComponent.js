import React, { useEffect, useState } from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts'

//import { userService } from '../_services/user.service';
import { mockService } from '../_services/mockUser.service';

const BarChartComponent = ({ uid }) => {
    const [mockActivity, setMockActivity] = useState([])

    useEffect(() => {
        console.log('useEffect');
        mockService.getMockActivity(parseInt(uid))
            .then(res => {
                console.log(res);
                setMockActivity(res.data)
            })
            .catch(error => console.log(error))
    }, [uid])



    return (
        <div className="BarChartConponent" style={{ padding: '20px' }}>

            <BarChart width={800}
                height={500}
                data={mockActivity.sessions}
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