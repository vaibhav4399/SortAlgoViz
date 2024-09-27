import { useContext, useState } from 'react';
import { dataContext } from '../Layout/Layout';
import IDataContext, { IHomeContext } from '../../interfaces/DataContext';
import {motion} from 'framer-motion';
import { handleQuantity, handleRange, getSliderThumbPosition, createArray } from '../../hooks/useHandlers';

import './Home.css';
import { homeContext } from './Home';

/**
 * * Functional Component to handle the Input for the Algorithm
 * @returns Returns the Algorithm Functional Input
 */

const AlgorithmInput = () => {

    const context: IDataContext | null = useContext(dataContext);
    const homeC: IHomeContext | null = useContext(homeContext);

    //** Do not load the component if the context data is not available */

    if(!context || !homeC){
        return(
            <div>
                <p>Could not load the component</p>
            </div>
        );
    }

    const {algorithm, range, setRange, quantity, setQuantity, setIsModal} = context
    const {setArray, isSorting, setBarWidth, setSelectedBar} = homeC;

    const [isTooltip, setIsTooltip] = useState<boolean>(false);

    return (
        <div className='algorithminput'>
            <div className='outer'>
                <div onClick={() => setIsModal(true)} className='misc-style algorithm'>{algorithm}</div>
                <div className='relative misc-style'>
                    <motion.span
                        initial={{
                            opacity: 0
                        }}
                        animate={{
                            opacity: isTooltip ? 1 : 0
                        }}
                        transition={{
                            ease: 'easeInOut',
                            duration: 0.2,
                            delay: 0.05
                        }}
                        className='tooltip' 
                        style={{ left: `${getSliderThumbPosition(range)}%`, top: "-20px" }} >
                        {range}
                    </motion.span>
                    <motion.input
                        onHoverStart={() => setIsTooltip(true)}
                        onHoverEnd={() => setIsTooltip(false)}
                        onTouchStartCapture={() => setIsTooltip(true)}
                        onTouchEndCapture={() => setIsTooltip(false)}
                        onChange={(e) => handleRange(e, setRange)} className='range' type="range" min="20" max="200" value={range}  />
                        <span className='absolute top-[40px] left-3'>Min</span>
                        <span className='absolute top-[40px] right-3'>Max</span>
                </div>
                <input onChange={(e) => handleQuantity(e, setQuantity)} className='misc-style quantity' type="text"  value={quantity} />
                <button aria-label='Generate Array' onClick={() => createArray(setArray, setBarWidth, setSelectedBar, quantity, range)} className=' misc-style' disabled={isSorting}>Generate</button>
            </div>
        </div>
    );
}

export default AlgorithmInput;