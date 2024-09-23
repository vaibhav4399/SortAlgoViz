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