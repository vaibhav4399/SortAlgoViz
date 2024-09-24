import AlgorithmInput from './AlgorithmInput';
import Modal from './Modal';
import Visualizer from './Visualizer';


import './Home.css';


const Home = () => {
    return (
        <div className='home'>
            <AlgorithmInput />
            <Modal />
            <Visualizer />
        </div>
    );
}

export default Home;