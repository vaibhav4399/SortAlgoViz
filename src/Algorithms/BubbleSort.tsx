import { markSortComplete } from "../hooks/useHandlers";
import { ISortData } from "../interfaces/DataContext";

/**
 * * Bubble Sort Sorting Algorithm
 * @param array array of values
 * @param setArray Function to set the Array
 * @param setSelectedBar Function to track the selected bars
 * @param setIsSorting Function to Check if Sorting is going on
 */

const BubbleSort = async ({array, setArray, setSelectedBar, setIsSorting}: ISortData) => {
    setIsSorting(true);
    const arr = array.slice();
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {

            setSelectedBar(prevSelected => [...prevSelected ?? [], j]);
            await new Promise((resolve) => setTimeout(resolve, 100)); 
            setSelectedBar(prevSelected => [...prevSelected ?? [], j + 1]);
            await new Promise((resolve) => setTimeout(resolve, 100));

            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                setArray([...arr]); 

                await new Promise((resolve) => setTimeout(resolve, 100)); 
                setSelectedBar([]);
            }
            setSelectedBar([]);
        }
    }
    setSelectedBar([]);
    markSortComplete(array, setSelectedBar);
    setIsSorting(false);
};

export default BubbleSort;