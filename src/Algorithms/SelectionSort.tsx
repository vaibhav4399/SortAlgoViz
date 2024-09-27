import { markSortComplete } from "../hooks/useHandlers";
import { ISortData } from "../interfaces/DataContext";


/**
 * * Selection Sort Sorting Algorithm
 * @param array array of values
 * @param setArray Function to set the Array
 * @param setSelectedBar Function to track the selected bars
 * @param setIsSorting Function to Check if Sorting is going on
 */

const SelectionSort = async ({array, setArray, setSelectedBar, setIsSorting}: ISortData) => {

    setIsSorting(true);
    let arr = array;

    for(let i = 0; i < arr.length; i++){
        let new_min: number = i;
        setSelectedBar([i,new_min]);
        await new Promise((resolve) => setTimeout(resolve, 100));

        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[new_min]){
                new_min = j;
            }
            setSelectedBar([i,new_min]);
            await new Promise((resolve) => setTimeout(resolve, 100));
        }

        if( i != new_min){
            let temp = arr[i];
            arr[i] = arr[new_min];
            arr[new_min] = temp;
        }
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, 100));
        setSelectedBar([]);
        await new Promise((resolve) => setTimeout(resolve, 100));
    }

    setSelectedBar([]);
    markSortComplete(array, setSelectedBar);
    setIsSorting(false);

}

export default SelectionSort;