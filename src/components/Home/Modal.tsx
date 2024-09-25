import { useContext } from 'react';
import IDataContext from '../../interfaces/DataContext';
import { dataContext } from '../Layout/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import algorithms from './Algorithms.json'
import {motion} from 'framer-motion';
import { handleAlgorithm } from '../../hooks/useHandlers';

import './Home.css';

//** Add the required fontawesome icons to the library */

library.add(faXmark)

/**
 * * Functional Component to create a modal
 * @returns Returns a Functional Component
 */

const Modal = () => {

    const context: IDataContext | null = useContext(dataContext);

    //** Do not load the component if the context does not exists */

    if (!context) {
        return (
            <div>
                <p>Could not load the component</p>
            </div>
        );
    }

    const { algorithm, isModal, setIsModal } = context

    return (
        <div className={`modal-bg ${isModal ? 'flex': 'hidden'}`}>
            <div className='modal-body'>
                <div className='close-btn'>
                    <FontAwesomeIcon icon={faXmark} onClick={() => setIsModal(false)} className='cursor-pointer' />
                </div>
                <div className='badge-section'>
                    {
                        algorithms &&
                        algorithms.map((algo) => {
                            return <Badges key={algo.key} algo={algo.value} isSelected={algo.value == algorithm} context={context} />
                        })
                    }
                </div>
            </div>
        </div>
    );
}

/**
 * * Functional Component to create badges
 * @param param0 Contains parametes algorithm, isSelected (to check selected algorithm) and context
 * @returns Badge Component
 */

const Badges = ({algo, isSelected, context}: {algo: string, isSelected: boolean, context: IDataContext}) => {
    return (
        <motion.span
            initial={{x: 0, y: 0}}
            animate={{ x: "-5px", y: "-5px" }}
            whileHover={{x: "-10px", y: "-10px"}}
            transition={{
                type: "spring",
                stiffness: 500
            }}
            className={`badge-outer ${isSelected ? 'bg-blue-700': 'bg-gray-300'}`} onClick={() => handleAlgorithm(algo, context.setAlgorithm, context.setIsModal)}>
            <span className={`${isSelected ? 'bg-blue-100': 'bg-gray-200'} badge-inner`}>
                {algo}
            </span>
        </motion.span>
    );
}

export default Modal;