import React from 'react';
import PropTypes from 'prop-types'
import './chartError.css'
import errorImg from '../../assets/images/error.png'

/**
 * 
 * @param {Array||object} data
 * @returns {JSX.Element} 
 */
const ChartError = ({ data }) => {

    if (data && data.length > 0) {
        return null
    }
    if (typeof data === 'object' && data.value !== undefined) {
        return null
    }
    return (
        <div className="error-opacity">
            <div className="error-message">
                <p>* Données non disponibles pour le moment</p>
            </div>
            <img className='error-image' style={{ width: '130px', height: '130px' }} src={errorImg} alt="error" />
        </div>
    );
};

ChartError.prototype = {
    data: PropTypes.any.isRequired
}

export default ChartError;