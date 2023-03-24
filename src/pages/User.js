import React, { useEffect } from 'react';
//import { userService } from '../_services/user.service';
import { mockService } from '../_services/mock.service';

const User = () => {

    useEffect(() => {
        mockService.getMockUser().then(res => console.log(res.data)).catch(err => console.log(err))
    }, [])

    return (
        <div className='User'>
            <h1>Choix de l'utilisateur</h1>
        </div>
    );
};

export default User;