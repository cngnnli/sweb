import { createContext, useContext, useState } from "react";

const Score = createContext();

export const ScoreProvider = ({ children }) => {
    const [ dyn, setDyn ] = useState([]);
    const [ contents, setContents ] = useState([]);
    const [ counter, setCounter ] = useState(0);
    const [ array, setArray ] = useState([]);

    const values = {
        dyn,
        setDyn,
        contents,
        setContents,
        counter,
        setCounter,
        array,
        setArray
    }

    return <Score.Provider value={values}>{children}</Score.Provider>
}
export default Score;