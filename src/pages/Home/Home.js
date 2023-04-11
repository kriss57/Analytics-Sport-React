import { useParams } from 'react-router-dom';
import BarChartComponent from '../../components/BarChart/BarChartComponent'
import ItemsBar from '../../components/itemsBar/ItemsBar';
import LineChartComponent from '../../components/LineChart/LineChartComponent';
import RadaChartComponent from '../../components/RadarChart/RadaChartComponent';
import Title from '../../components/Title/Title';
import PieChartComponent from '../../components/PieChart/PieChartComponent';


import './home.css'

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
        </main>
    );
};

export default Home;