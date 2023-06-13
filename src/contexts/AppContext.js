import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [availableItems, setAvailableItems] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    const [type, setType] = useState("");
    const removeItemsFromStock = (itemsToRemove) => {
        setAvailableItems(
            availableItems.filter((item) => !itemsToRemove.includes(item))
        );
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://run.mocky.io/v3/2d06d2c1-5a77-4ecd-843a-53247bcb0b94"
                );
                const data = await response.data;

                setAvailableItems(data);
                console.log(availableItems);
            } catch (error) {
                console.log("Error fetching data from the API:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <AppContext.Provider
            value={{
                availableItems,
                type,
                setType,
                selectedItems,
                setSelectedItems,
                removeItemsFromStock,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
