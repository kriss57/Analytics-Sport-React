import React from 'react';
import './itemsBar.css'

import yoga from '../../assets/images/icon-yoga.png'
import swimmer from '../../assets/images/icon-swimmer.png'
import cycle from '../../assets/images/icon-cycle.png'
import theRock from '../../assets/images/icon-the-rock.png'

const ItemsBar = () => {
    return (
        <div className='ItemsBar' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div className="imageContainer" style={{ height: "35%", display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                <img style={{ width: '64px', height: '64px' }} src={yoga} alt="" />
                <img style={{ width: '64px', height: '64px' }} src={swimmer} alt="" />
                <img style={{ width: '64px', height: '64px' }} src={cycle} alt="" />
                <img style={{ width: '64px', height: '64px' }} src={theRock} alt="" />
            </div>
            <p className='copiryght'>Copiryght, SportSee 2020</p>
        </div>
    );
};

export default ItemsBar;