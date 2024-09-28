import { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { dataContext } from '../Layout/Layout';
import IDataContext from '../../interfaces/DataContext';
import { handleResize } from '../../hooks/useHandlers';
import { Link, useNavigate } from 'react-router-dom';
import {AnimatePresence, motion} from 'framer-motion';
import moonSvg from '../../assets/icons/icons8-moon-64.svg';
import sunSvg from '../../assets/icons/icons8-sun.svg';


import './Header.css';

//** Add the required fonts to the library for use */

library.add(faBars, faXmark);

/**
 * * Function to create the Header component
 * @returns Header Component or Error for not loading Header Component
 */

const Header = () => {
    
    const context: IDataContext | null = useContext(dataContext);
    
    //** Check if content does not exists then dont load the header component */

    if (!context) {
        return (
            <div className="text-3xl text-center mt-3">
                Could not load the component. Something went wrong.
            </div>
        );
    }
    
    const {dark, setDark} = context;
    
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const [logo, setLogo] = useState<string>(() => {
        return window.innerWidth > 639 ? (dark ? 'sav_long_white_logo.svg' : 'sav_long_black_logo.svg') : (dark ? 'sav_short_white_logo.svg' : 'sav_short_black_logo.svg')
    });
    const navigate = useNavigate();

    //** UseEffect for handling the Header component on window resize */

    useEffect(() => {
        window.addEventListener('resize', () => handleResize(setIsClicked, dark, setLogo));

        return () => {
            window.removeEventListener('resize', () => handleResize(setIsClicked, dark, setLogo));
        }
    },[dark])

    //** UseEffect to toggle the dark mode */

    useEffect(() => {
        if(dark){
            document.body.classList.add("dark");
        }else{
            document.body.classList.remove("dark");
        }
        setLogo(() => {
            return window.innerWidth > 639 ? (dark ? 'sav_long_white_logo.svg' : 'sav_long_black_logo.svg') : (dark ? 'sav_short_white_logo.svg' : 'sav_short_black_logo.svg')
        });
    },[dark])

    return (
        <header>
            <div className="logo">
                <div onClick={() => setIsClicked(!isClicked)} className="hamburger">
                    <FontAwesomeIcon className="hamburger_icon" icon={isClicked? faXmark : faBars} />
                </div>
                <img onClick={() => navigate('/')} className="logo_img" alt="logo" src={logo}  />
            </div>

            <AnimatePresence>
                <motion.nav
                    variants={{
                        hidden: {y: "-100px", opacity: 0},
                        visible: {y: "0px", opacity: 1}
                    }}
                    initial="hidden"
                    animate={ window.innerWidth < 640 ? (isClicked ? "visible": "hidden") : "visible"}
                    exit={"hidden"}
                    transition={{
                        type: "spring",
                        damping: 35,
                        duration: 0.3
                    }}
                    className={isClicked ? 'mobile': ''}>
                    <ul className="nav_list">
                        <motion.li
                            variants={{
                                hidden: {opacity: 0, x: "-500px"},
                                visible: {opacity: 1, x: "0px"}
                            }}
                            initial="hidden"
                            animate="visible"
                            transition={{
                                type: "tween",
                                duration: 1
                            }}
                            className='nav_item'>
                            <Link to="/about">About</Link>
                        </motion.li>
                        <motion.li
                            variants={{
                                hidden: { opacity: 0, x: "500px" },
                                visible: { opacity: 1, x: "0px" }
                            }}
                            initial="hidden"
                            animate="visible"
                            transition={{
                                type: "spring",
                                duration: 1
                            }}
                            className='nav_item'>
                            <Link to="/buymeacoffee">Buy Me a Coffee</Link>
                            <img alt="coffee-icon" src="https://media.giphy.com/media/TDQOtnWgsBx99cNoyH/giphy.gif" />
                        </motion.li>
                    </ul>
                </motion.nav>
            </AnimatePresence>

            <div onClick={() => setDark(!dark)} className='switch'>
                <button aria-label='Toggle Dark Mode'>
                    <img alt="switch-icon" src={dark ? moonSvg: sunSvg} className={`moon transition-all duration-1000 transform ${dark ? 'moon': 'sun'}`} width="30px" />
                </button>
            </div>
        </header>
    );
}

export default Header;