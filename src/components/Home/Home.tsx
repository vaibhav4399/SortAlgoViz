import AlgorithmInput from './AlgorithmInput';
import Modal from './Modal';
import Visualizer from './Visualizer';
import { useState, createContext, useContext } from 'react';
import IDataContext, { IHomeContext } from '../../interfaces/DataContext';
import { dataContext } from '../Layout/Layout';


import './Home.css';

//** Creating Home Context for Child Components of Home */

export const homeContext = createContext<IHomeContext | null>(null);

/**
 * * Functional Component for Home
 * @returns Returns the Home Component
 */

const Home = () => {

    const context: IDataContext | null = useContext(dataContext);

    //** Do not load the component if context is not available */

    if(!context){
        return (
            <div>
                <p>Could not load the component</p>
            </div>
        );
    }

    const {quantity} = context;

    const [array, setArray] = useState<number[]>([]);
    const [isSorting, setIsSorting] = useState<boolean>(false);
    const [barWidth, setBarWidth] = useState<number>(Math.floor((window.innerWidth * 0.9) / quantity));
    const [selectedBar, setSelectedBar] = useState<number[]>([]);

    //** Create Home Data to be passed in Home Context */

    const homeData = {
        array,
        setArray,
        isSorting,
        setIsSorting,
        barWidth,
        setBarWidth,
        selectedBar,
        setSelectedBar
    }
    

    return (
        <homeContext.Provider value={homeData}>
            <>
                <div className='home'>
                    <AlgorithmInput />
                    <Modal />
                    <Visualizer />
                </div>
            </>
        </homeContext.Provider>
    );
}

export default Home;