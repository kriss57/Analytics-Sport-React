import React from 'react';
import './itemsBar.css'

import yoga from '../../assets/images/icon-yoga.png'
import swimmer from '../../assets/images/icon-swimmer.png'
import cycle from '../../assets/images/icon-cycle.png'
import theRock from '../../assets/images/icon-the-rock.png'

/**
 * 
 * @returns {JSX.Element} 
 */
const ItemsBar = () => {
    return (
        <div className='ItemsBar' >
            <div className="imageContainer" style={{ height: "35%", display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }}>
                <img style={{ width: '64px', height: '64px', padding: '0' }} src={yoga} alt="" />
                <img style={{ width: '64px', height: '64px', padding: '0' }} src={swimmer} alt="" />
                <img style={{ width: '64px', height: '64px', padding: '0' }} src={cycle} alt="" />
                <img style={{ width: '64px', height: '64px', padding: '0' }} src={theRock} alt="" />
            </div>
            <p className='copiryght'>Copiryght, SportSee 2020</p>
        </div>
    );
};

export default ItemsBar;