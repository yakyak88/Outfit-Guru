import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [availableItems, setAvailableItems] = useState([]);
    const [type, setType] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://run.mocky.io/v3/2d06d2c1-5a77-4ecd-843a-53247bcb0b94"
                );
                const data = response.data;

                setAvailableItems({
                    data,
                });
            } catch (error) {
                console.log("Error fetching data from the API:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <AppContext.Provider value={{ availableItems, type, setType }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
