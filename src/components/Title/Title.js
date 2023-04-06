import React, { useEffect, useState } from 'react';
import { userService } from '../../_services/user.service';

const Title = ({ uid }) => {
    console.log(uid);
    const [user, setUser] = useState({})

    useEffect(() => {
        userService.getUser(parseInt(uid))
            .then((res) => {
                console.log(res)
                setUser(res.data.data.userInfos)
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