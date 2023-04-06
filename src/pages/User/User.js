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
                console.log(res)
            })
            .catch(err => console.log(err + '***** dans erreur ****'))
    }, [])

    return (
        <div className='User'>
            <h1>Choix de l'utilisateur</h1>
            {users.map(user => (
                <Link className='link' key={user.id} to={`/user/home/${user.id}`}>
                    <p className='user-name' key={user.id}>{user.userInfos.firstName} {user.userInfos.lastName}</p>
                </Link>
            ))}
            <h2 style={{ color: 'green' }}>Vous êtes en {process.env.REACT_APP_NODE_ENV} sur {process.env.REACT_APP_MOCK_URL}</h2>
            <button style={{ padding: '10px', backgroundColor: 'black', color: 'green', fontSize: 30, borderRadius: 10, border: 'solid 1px violet', cursor: 'pointer' }}>SWITCH API</button>
        </div >
    );
};

export default User;