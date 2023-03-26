import React from 'react';
import { useParams } from 'react-router-dom';
import BarChartComponent from '../../components/BarChartComponent'
import ItemsBar from '../../components/itemsBar/ItemsBar';

const Home = () => {
    let { uid } = useParams()

    return (
        <div className="Home">
            <main>
                <ItemsBar />
                <BarChartComponent uid={uid} />
            </main>
        </div>
    );
};

export default Home;