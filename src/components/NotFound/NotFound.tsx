import {motion} from 'framer-motion';
import './NotFound.css';


const NotFound = () => {
    return (
        <div className='notfound_container'>
            <div className='notfound_img'>
                <img alt="404_cry" src={'/src/assets/images/404_cry.gif'} />
            </div>
            <motion.div
                initial={{opacity:0, y:"500px"}}
                animate={{opacity: 1, y: 0}}
                transition={{
                    type: "spring",
                    damping: 30,
                    stiffness: 40
                }} 
                className='notfound_section'>
                <h1 className='notfound_title'>!!!! 404 Not Found !!!!</h1>
                <p>Oh no, you've managed to get lost... again. Impressive! </p>
                <p>But don't worry, I'm sure you'll totally figure it out this time, just like every other time (eventually). 🙃</p>
                <p>For now just click here 👉🏽 <a href="/">Go Home</a> before things get any weirder.</p>
            </motion.div>
        </div>
    );
}

export default NotFound;