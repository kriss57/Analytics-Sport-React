import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
//import { userService } from '../_services/user.service';
import { mockService } from '../../_services/mockUser.service';

import './user.css'

const User = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        mockService.getMockAllUsers()
            .then(res => {
                setUsers(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='User'>
            <h1>Choix de l'utilisateur</h1>
            {users.map(user => (
                <Link className='link' key={user.id} to={`/user/home/${user.id}`}>
                    <p className='user-name' key={user.id}>{user.userInfos.firstName} {user.userInfos.lastName}</p>
                </Link>
            ))}
        </div>
    );
};

export default User;