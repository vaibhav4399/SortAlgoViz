import './About.css';

/**
 * * Functional Component for About Section
 * @returns Returns the Component for About Section
 */

const About = () => {
    return (
        <div className='about_container'>
            <div className='about_section' >
                <h1 className='title' >About</h1>
                <p className='info'>
                    This Sorting Algorithm Visualizer is an interactive tool designed to help users understand how different sorting algorithms work. Users can see how elements in a list are rearranged in real-time, making it easier to grasp the logic and efficiency of various algorithms.
                </p>
                <p className='info'>
                    Sorting algorithms are a fundamental concept in computer science, often covered in data structures and algorithms courses. Understanding how different algorithms work in terms of time and space complexity is critical for writing efficient code.
                </p>
            </div>
            <div className='about_img'>
                <img alt="about_avacado"  src={'/src/assets/images/avocado_about.webp'} />
            </div>
        </div>
    )
}

export default About;