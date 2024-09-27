import { markSortComplete } from "../hooks/useHandlers";
import { ISortData } from "../interfaces/DataContext";

/**
 * * Insertion Sort Sorting Algorithm
 * @param array array of values
 * @param setArray Function to set the Array
 * @param setSelectedBar Function to track the selected bars
 * @param setIsSorting Function to Check if Sorting is going on
 */

const InsetionSort = async ({array, setArray, setSelectedBar, setIsSorting}: ISortData) => {
    setIsSorting(true);
    const arr = array;

    for(let i = 1; i < arr.length; i++){
        
        for(let j = i - 1; j >= 0 && arr[j-1] > arr[j]; j--){
            setSelectedBar(prevSelected => [...prevSelected ?? [], j]);
            await new Promise((resolve) => setTimeout(resolve, 100));
            setSelectedBar(prevSelected => [...prevSelected ?? [], j - 1]);
            await new Promise((resolve) => setTimeout(resolve, 100));

            let temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
            setArray([...arr]);
            await new Promise((resolve) => setTimeout(resolve, 100));
            setSelectedBar([]);
        }
    }

    setSelectedBar([]);
    markSortComplete(array, setSelectedBar);
    setIsSorting(false);


}

export default InsetionSort;