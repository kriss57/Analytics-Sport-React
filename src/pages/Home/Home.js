import React from 'react';
import BarChartComponent from '../../components/BarChartComponent'
import ItemsBar from '../../components/itemsBar/ItemsBar';

const Home = () => {
    return (
        <div className="Home">
            <main>
                <ItemsBar />
                <BarChartComponent />
            </main>
        </div>
    );
};

export default Home;