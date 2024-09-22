import { Outlet } from 'react-router-dom';
import { createContext } from 'react';
import { useState } from 'react';
import { Bounce, ToastContainer } from 'react-toastify';
import IDataContext from '../../interfaces/DataContext';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import './Layout.css';
import 'react-toastify/ReactToastify.min.css';

/**
 * * Data Context for the data to be passed accross various components
 */

export const dataContext = createContext<IDataContext | null>(null)

/**
 * * Layout Component with the page structure
 * @returns Layout component with the Basic Page sturcture
 */

const Layout = () => {

    const [algorithm, setAlgorithm] = useState<string>("BubbleSort");
    const [isModal, setIsModal] = useState<boolean>(false);
    const [quantity, setQuantity] = useState<number>(20);
    const [range, setRange] = useState<number>(20);

    //** Context Data to be passed to various components */
    
    const contextData = {
        algorithm,
        setAlgorithm,
        isModal,
        setIsModal,
        range,
        setRange,
        quantity,
        setQuantity
    }

    return (
        <dataContext.Provider value={contextData}>
            <>
                <Header />
                <main>
                    <ToastContainer
                        newestOnTop={true}
                        theme="colored"
                        pauseOnHover
                        transition={Bounce}
                        draggable
                    />
                    <Outlet />
                </main>
                <Footer />
            </>            
        </dataContext.Provider>        
    );

}

export default Layout;