import React, { useEffect, useState } from 'react';
import { mockService } from '../../_services/mockUser.service';


const Title = ({ uid }) => {
    console.log(uid);
    const [user, setUser] = useState([])

    useEffect(() => {
        mockService.getMockUser(parseInt(uid))
            .then((res) => {
                console.log(res)
                setUser(res.data.userInfos)
            })
            .catch(err => console.log(err))
    }, [uid])

    return (
        <div className="Title">
            <h1>Bonjour {user.firstName}</h1>
            <p></p>
        </div>

    )
};

export default Title;