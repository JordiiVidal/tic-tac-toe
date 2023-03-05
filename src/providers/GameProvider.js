import React, { useState } from "react";

const GameContext = React.createContext();

const GameProvider = ({children}) => {
    const [test, setTest] = useState(true);

    return (
        <GameContext.Provider value={{test}}>
            {children}
        </GameContext.Provider>
    )
}

export const useGameContext = () => React.useContext(GameContext);

export default GameProvider;
