import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { userService } from '../../_services/user.service';

import './user.css'

const User = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        userService.getAllUsers()
            .then(res => {
                setUsers(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='User'>
            <h1 style={{ color: 'red', textDecoration: 'underline red' }}>## Developer Menu ##</h1>
            <br /><br /><br />
            <h2 style={{ color: 'black', fontSize: 30, textDecoration: 'underline black' }}>User's choice</h2>
            {users.map(user => (
                <Link className='link' key={user.id} to={`/user/home/${user.id}`}>
                    <p className='user-name' key={user.id}>{user.userInfos.firstName} {user.userInfos.lastName}</p>
                </Link>
            ))}
            <br /><br /><br /><br />
            <p style={{ color: 'green', fontSize: 30 }}>You are in {process.env.REACT_APP_NODE_ENV} on {process.env.REACT_APP_MOCK_URL}</p>
            <button style={{ padding: '10px', backgroundColor: 'black', color: 'green', fontSize: 30, borderRadius: 10, border: 'solid 1px violet', cursor: 'pointer' }}>you use the mock data</button>
        </div >
    );
};

export default User;