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
    setRange ? setRange(Number(e.target.value)) : false;
}

/**
 * * Function to handle the quantity input
 * @param e HTML input event
 * @param setQuantity SetQuantity function of useState
 */

export const handleQuantity = (e: React.ChangeEvent<HTMLInputElement>, setQuantity:setState<number>) => {
    setQuantity ? setQuantity(parseInt(e.target.value)) : false;
}

/**
 * * Function to handle the slider thumb position
 * @param range range input value
 * @returns Percentage value of the slider position
 */

export const getSliderThumbPosition = (range: number): number => {
    return 4 + ((range ?? 20 - 20) / (1000 - 20)) * 88; //** Expression for the effective range between 4 to 92 for considering padding issue */
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