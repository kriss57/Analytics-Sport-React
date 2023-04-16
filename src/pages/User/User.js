import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { userService } from '../../_services/user.service';

import './user.css'

/**
 * 
 * @returns {JSX.Element} 
 */
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

            <br /><br /><br />
            <h2 style={{ color: 'black', fontSize: 30, textDecoration: 'underline black' }}>Utilisateur</h2>
            {users.map(user => (
                <Link className='link' key={user.id} to={`/user/home/${user.id}`}>
                    <p className='user-name' key={user.id}>{user.userInfos.firstName} {user.userInfos.lastName}</p>
                </Link>
            ))}
            <br /><br /><br /><br />


        </div >
    );
};

export default User;