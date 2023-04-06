import React, { useEffect, useState } from 'react';
import { userService } from '../../_services/user.service';
import PropTypes from 'prop-types'

/**
 * 
 * @param {string} uid
 * @returns template
 */
const Title = ({ uid }) => {

    const [user, setUser] = useState({})

    useEffect(() => {
        userService.getUser(parseInt(uid))
            .then((res) => {
                setUser(res.data.data.userInfos)
            })
            .catch(err => console.log(err))
    }, [uid])

    return (
        <div className="Title">
            <h1 style={{ fontWeight: '500', fontSize: '48px' }}>Bonjour <span style={{ color: 'red' }} >{user.firstName}</span></h1>
            <p style={{ marginBottom: '15px', fontSize: '18px' }}>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>

    )
};

Title.prototype = {
    uid: PropTypes.string.isRequired
}

export default Title;