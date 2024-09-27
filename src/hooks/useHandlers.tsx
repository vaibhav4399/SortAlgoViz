import { setState } from "../interfaces/DataContext";

/**
 * * Function to handle the Resize of the window
 * @param setIsClicked Check if the Hamburger Icon is clicked
 * @param dark Status of the dark mode
 * @param setLogo Set the logo depending on the dark mode and the size of the window
 */

export const handleResize = (setIsClicked: setState<boolean>, dark: boolean, setLogo:setState<string>) => {
    if(window.innerWidth > 639){
        setIsClicked(false);
        setLogo(dark ? 'sav_long_white_logo.svg' : 'sav_long_black_logo.svg');
    }
    else{
        setLogo(dark ? 'sav_short_white_logo.svg' : 'sav_short_black_logo.svg');
    }
}

/**
 * * Function to handle the range input
 * @param e HTML input event
 * @param setRange SetRange function of useState
 */

export const handleRange = (e: React.ChangeEvent<HTMLInputElement>, setRange: setState<number>) => {
    setRange ? setRange(Number(e.target.value) > 200 ? 200 : Number(e.target.value)) : false;
}

/**
 * * Function to handle the quantity input
 * @param e HTML input event
 * @param setQuantity SetQuantity function of useState
 */

export const handleQuantity = (e: React.ChangeEvent<HTMLInputElement>, setQuantity:setState<number>) => {
    if(e.target.value === ''){
        setQuantity(0);
        return;
    }
    const value = parseInt(e.target.value, 10);
    if(value >= 0 && value <= 50){
        setQuantity(value)
    }
    else{
        setQuantity(10)
    }
}

/**
 * * Function to handle the slider thumb position
 * @param range range input value
 * @returns Percentage value of the slider position
 */

export const getSliderThumbPosition = (range: number): number => {
    return 1 + ((range ?? 20 - 20) / (200 - 20)) * 78; //** Expression for the effective range between 4 to 92 for considering padding issue */
};

/**
 * * Function to handle the Change in the Algorithm Value
 * @param algo Algorithm name passed as a string
 * @param setAlgorithm Function to set the algorithm variable
 * @param setIsModal Function to set the modal variable
 */

export const handleAlgorithm = (algo: string, setAlgorithm:setState<string> , setIsModal: setState<boolean>) => {
    setAlgorithm(algo);
    setIsModal(false);
}


/**
 * * Function to Create Random Array for the Visuzlizer
 * @param setArray Function to set the Array
 * @param setBarWidth Function to set the Bar Width
 * @param setSelectedBar Function to track the selected Bar
 * @param quantity Number of bars in the visualizer
 * @param range Range of values to be generated
 */

export const createArray = (setArray: setState<number[]>, setBarWidth: setState<number>, setSelectedBar: setState<number[]>, quantity: number, range: number) => {
    const a = Array.from({ length: quantity }, () => Math.floor(Math.random() * (range - 0 + 1)) + 0);
    setArray(a);
    calcBarWidth(setBarWidth, quantity)
    setSelectedBar([]);
}


/**
 * * Function to calculate the Width of the Bar
 * @param setBarWidth Function to set the Bar Width
 * @param quantity Number of Bars in the Visualizer
 */

export const calcBarWidth = (setBarWidth: setState<number>, quantity: number) => {
    // const bW = Math.floor((window.innerWidth * 0.95) / quantity);
    setBarWidth((window.innerWidth * 0.95) / quantity);
}

/**
 * * Function to mark the completion of sorting
 * @param array Array of values
 * @param setSelectedBar Function to set the Selected Bar
 */

export const markSortComplete = (array: number[], setSelectedBar: setState<number[]>) => {
    array.forEach((_ele, id) => {
        setTimeout(() => {
            setSelectedBar(prevSelected => [...prevSelected ?? [], id])
        }, id * 100);
    })
}