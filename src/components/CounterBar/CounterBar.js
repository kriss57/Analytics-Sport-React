import React, { useEffect, useState } from 'react';

import calImg from '../../assets/images/calories.png'
import protImg from '../../assets/images/proteines.png'
import appleImg from '../../assets/images/apple.png'
import cheeseburger from '../../assets/images/cheeseburger.png'

import './counterBar.css'
import { userService } from '../../_services/user.service';

/**
 * 
 * @param {string} uid
 * @returns {JSX.Element} 
 */
const CounterBar = ({ uid }) => {
    const [allData, setAllData] = useState([])

    useEffect(() => {
        userService.getUser(parseInt(uid))
            .then((res) => {
                console.log(res.data.data.keyData)
                setAllData(res.data.data.keyData)
            })
            .catch(err => console.log(err))
    }, [uid])


    return (
        <div className='CounterBar'>
            <div className="card">
                <div className="stikers">
                    <img style={{ borderRadius: '6px', background: 'rgba(253, 81, 129, 0.1)', padding: '20px', width: '20px', height: '20px' }} src={calImg} alt="flamme" />
                </div>
                <div className="count">
                    <p style={{ fontStyle: 'normal', fontSize: '20px', fontWeight: '700' }}>{allData.calorieCount}kCal</p>
                    <h3 style={{ fontStyle: 'normal', fontSize: '14px', fontWeight: '500' }}>Calories</h3>
                </div>
            </div>
            <div className="card">
                <div className="stikers">
                    <img style={{ borderRadius: '6px', background: 'rgba(74, 184, 255, 0.1)', padding: '20px', width: '20px', height: '20px' }} src={protImg} alt="viande" />
                </div>
                <div className="count">
                    <p style={{ fontStyle: 'normal', fontSize: '20px', fontWeight: '700' }}>count</p>
                    <h3 style={{ fontStyle: 'normal', fontSize: '14px', fontWeight: '500' }}>Proteines</h3>
                </div>
            </div>
            <div className="card">
                <div className="stikers">
                    <img style={{ borderRadius: '6px', background: 'rgba(249, 206, 35, 0.1)', padding: '20px', width: '20px', height: '20px' }} src={appleImg} alt="pomme" />
                </div>
                <div className="count">
                    <p style={{ fontStyle: 'normal', fontSize: '20px', fontWeight: '700' }}>count</p>
                    <h3 style={{ fontStyle: 'normal', fontSize: '14px', fontWeight: '500' }}>Glucides</h3>
                </div>
            </div>
            <div className="card">
                <div className="stikers">
                    <img style={{ borderRadius: '6px', background: 'rgba(253, 81, 129, 0.1)', padding: '20px', width: '20px', height: '20px' }} src={cheeseburger} alt="cheeseburger" />
                </div>
                <div className="count">
                    <p style={{ fontStyle: 'normal', fontSize: '20px', fontWeight: '700' }}>count</p>
                    <h3 style={{ fontStyle: 'normal', fontSize: '14px', fontWeight: '500' }}>Lipides</h3>
                </div>
            </div>
        </div>
    );
};

export default CounterBar;