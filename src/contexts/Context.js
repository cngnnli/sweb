import { createContext, useContext, useState } from "react";

const Score = createContext();

export const ScoreProvider = ({ children }) => {
    const [ a, setA ] = useState([]);
    const [ deneme, setDeneme ] = useState([]);
    const [ counter, setCounter ] = useState(0);
    const [ array, setArray ] = useState([]);

   

    const values = {
        a,
        setA,
        deneme,
        setDeneme,
        counter,
        setCounter,
        array,
        setArray
    }

    return <Score.Provider value={values}>{children}</Score.Provider>
}
export default Score;