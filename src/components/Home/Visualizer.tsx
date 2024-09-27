import { useContext, useEffect } from 'react';
import { dataContext } from '../Layout/Layout';
import IDataContext, { IHomeContext, ISortData } from '../../interfaces/DataContext';
import { homeContext } from './Home';
import { calcBarWidth } from '../../hooks/useHandlers';

import './Home.css';

//** Importing the Algorithms */

import BubbleSort from '../../Algorithms/BubbleSort';


//** Object to map the Sorting Function name with the Algorithm Value  */

const sortingAlgorithms: { [key: string]: ({array, setArray, setSelectedBar, setIsSorting}: ISortData) => Promise<void> } = {
    "Bubble Sort": BubbleSort
}

/**
 * * Function Component for Creating the Visualizer
 * @returns Returns the Visualizer Functional Component
 */

const Visualizer = () => {

    const context: IDataContext | null = useContext(dataContext);
    const homeC: IHomeContext | null = useContext(homeContext);

    //** Do not load the component if the Context Data or the Home Context Data is not available */

    if(!context || !homeC){
        return (
            <div>
                <p>Could not load the component</p>
            </div>
        );
    }

    const {algorithm, quantity, setAlgorithm} = context;
    const {array, setArray, isSorting, setIsSorting, barWidth, setBarWidth, selectedBar, setSelectedBar} = homeC;
    
 
    //** UseEffect to calculate the Bar Width based on the window size */

    useEffect(() => {
        window.addEventListener('resize', () => calcBarWidth(setBarWidth, quantity));

        return () => {
            window.removeEventListener('resize', () => calcBarWidth(setBarWidth, quantity));
        }
    }, [quantity])



    return (
            <div className='visual-container'>
                <div className='visual-bars'>
                    {array.map((value, id) => (
                        <div
                            key={id}
                            style={{
                                height: `${(value / Math.max(...array)) * 450}px`,
                                width: `${barWidth}px`,
                                backgroundColor: selectedBar?.includes(id) ? 'green': 'lightblue',
                                transition: 'background-color 0.3s ease'
                                
                            }}
                        >
                        </div>
                    ))}
                </div>
                <div className='sort_btn'>
                    <button disabled={isSorting} onClick={() => {
                        var algo = sortingAlgorithms[algorithm];
                        if(algo){
                            algo({array, setArray, setSelectedBar, setIsSorting});
                        }
                        else{
                            setAlgorithm("Bubble Sort");
                            BubbleSort({array, setArray, setSelectedBar, setIsSorting});
                        }
                    }} >Start Sorting</button>
                </div>
            </div>
    );
}

export default Visualizer;