
/**
 * * Type Defination for setState Function used in useState Hook
 */

type setState<s> = React.Dispatch<React.SetStateAction<s>>;

/**
 * * Interface for the data context provider
 */

interface IDataContext {
    algorithm: string,
    setAlgorithm: setState<string>,
    isModal: boolean,
    setIsModal: setState<boolean>,
    quantity?: number,
    setQuantity?: setState<number>,
    range?: number,
    setRange?: setState<number>
}


export default IDataContext;