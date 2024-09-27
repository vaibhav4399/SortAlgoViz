import { Outlet } from 'react-router-dom';
import { createContext } from 'react';
import { useState } from 'react';
import IDataContext from '../../interfaces/DataContext';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import './Layout.css';

/**
 * * Data Context for the data to be passed accross various components
 */

export const dataContext = createContext<IDataContext | null>(null)

/**
 * * Layout Component with the page structure
 * @returns Layout component with the Basic Page sturcture
 */

const Layout = () => {

    const [algorithm, setAlgorithm] = useState<string>("Bubble Sort");
    const [isModal, setIsModal] = useState<boolean>(false);
    const [quantity, setQuantity] = useState<number>(50);
    const [range, setRange] = useState<number>(200);
    const [dark, setDark] = useState<boolean>(false);

    //** Context Data to be passed to various components */
    
    const contextData: IDataContext = {
        algorithm,
        setAlgorithm,
        isModal,
        setIsModal,
        range,
        setRange,
        quantity,
        setQuantity,
        dark,
        setDark
    }

    return (
        <dataContext.Provider value={contextData}>
            <>
                <Header />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </>            
        </dataContext.Provider>        
    );

}

export default Layout;