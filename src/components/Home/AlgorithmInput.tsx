import { useContext, useState } from 'react';
import { dataContext } from '../Layout/Layout';
import IDataContext from '../../interfaces/DataContext';
import {motion} from 'framer-motion';
import { handleQuantity, handleRange, getSliderThumbPosition } from '../../hooks/useHandlers';

import './Home.css';

/**
 * * Functional Component to handle the Input for the Algorithm
 * @returns Returns the Algorithm Functional Input
 */

const AlgorithmInput = () => {

    const context: IDataContext | null = useContext(dataContext);

    //** Do not load the component if the context data is not available */

    if(!context){
        return(
            <div>
                <p>Could not load the component</p>
            </div>
        );
    }

    const {algorithm, range, setRange, quantity, setQuantity} = context

    const [isTooltip, setIsTooltip] = useState<boolean>(false);

    return (
        <div className='algorithminput'>
            <div className='outer'>
                <div className='misc-style algorithm'>{algorithm}</div>
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
                        style={{ left: `${() => getSliderThumbPosition(range?? 20)}%`, top: "-20px" }} >
                        {range}
                    </motion.span>
                    <motion.input
                        onHoverStart={() => setIsTooltip(true)}
                        onHoverEnd={() => setIsTooltip(false)}
                        onTouchStartCapture={() => setIsTooltip(true)}
                        onTouchEndCapture={() => setIsTooltip(false)}
                        onChange={(e) => handleRange(e, setRange)} className='range' type="range" min="20" max="1000" value={range}  />
                        <span className='absolute top-[40px] left-3'>Min</span>
                        <span className='absolute top-[40px] right-3'>Max</span>
                </div>
                <input onChange={(e) => handleQuantity(e, setQuantity)} className='misc-style quantity' type="number" min="20" max="4000" value={quantity} />
                <button className=' misc-style '>Generate</button>
            </div>
        </div>
    );
}

export default AlgorithmInput;