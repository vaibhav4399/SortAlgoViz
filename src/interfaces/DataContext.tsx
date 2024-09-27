
/**
 * * Type Defination for setState Function used in useState Hook
 */

export type setState<s> = React.Dispatch<React.SetStateAction<s>>;

/**
 * * Interface for the data context provider
 */

interface IDataContext {
    algorithm: string,
    setAlgorithm: setState<string>,
    isModal: boolean,
    setIsModal: setState<boolean>,
    quantity: number,
    setQuantity: setState<number>,
    range: number,
    setRange: setState<number>,
    dark: boolean,
    setDark: setState<boolean>
}

//** Inteface for the Home Context Data */

export interface IHomeContext {
    array: number[],
    setArray: setState<number[]>,
    isSorting: boolean,
    setIsSorting: setState<boolean>,
    barWidth: number,
    setBarWidth: setState<number>,
    selectedBar: number[],
    setSelectedBar: setState<number[]>
}

//** Interface for the Sorting Function Data */

export interface ISortData {
    array: number[],
    setArray: setState<number[]>,
    setSelectedBar: setState<number[]>,
    setIsSorting: setState<boolean>
}

export default IDataContext;