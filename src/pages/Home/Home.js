import { useParams } from 'react-router-dom';
import BarChartComponent from '../../components/BarChart/BarChartComponent'
import ItemsBar from '../../components/itemsBar/ItemsBar';
import LineChartComponent from '../../components/LineChart/LineChartComponent';
import RadaChartComponent from '../../components/RadarChart/RadaChartComponent';
import Title from '../../components/Title/Title';
import PieChartComponent from '../../components/PieChart/PieChartComponent';


import './home.css'
import CounterBar from '../../components/CounterBar/CounterBar';

/**
 * Main page
 * @returns {JSX.Element} 
 */
const Home = () => {
    let { uid } = useParams()

    return (
        <main className="Home">
            <ItemsBar />
            <div className="graphics">
                <Title uid={uid} />
                <BarChartComponent uid={uid} />
                <div className="mini-graph">
                    <LineChartComponent uid={uid} />
                    <RadaChartComponent uid={uid} />
                    <PieChartComponent uid={uid} />
                </div>

            </div>
            <CounterBar uid={uid} />
        </main>
    );
};

export default Home;