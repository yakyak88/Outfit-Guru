import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [availableItems, setAvailableItems] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    const [completedSets, setCompletedSets] = useState([]);
    const [type, setType] = useState("");
    const removeItemsFromStock = (itemsToRemove) => {
        setAvailableItems(
            availableItems.filter((item) => !itemsToRemove.includes(item))
        );
    };
    const addToStock = (items) => {
        setAvailableItems((prevItems) => [...prevItems, ...items]);
    };

    const deleteSet = (index) => {
        const newSets = [...completedSets];
        const deletedSet = newSets.splice(index, 1);
        addToStock(deletedSet[0]); // deletedSet is an array of arrays, we need the first element
        setCompletedSets(newSets);
    };
    const resetSelectedItems = () => {
        setSelectedItems([]);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://run.mocky.io/v3/2d06d2c1-5a77-4ecd-843a-53247bcb0b94"
                );
                const data = await response.data;

                setAvailableItems(data);
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
                setCompletedSets,
                completedSets,
                deleteSet,
                resetSelectedItems,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
