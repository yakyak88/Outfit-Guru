import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [availableItems, setAvailableItems] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    const [completedSets, setCompletedSets] = useState([]);
    const [type, setType] = useState("");

    const removeItemsFromStock = (itemsToRemove) => {
        const newAvailableItems = availableItems.filter((item) => {
            const matchingItem = itemsToRemove.find(
                (selectedItem) =>
                    selectedItem.type === item.type &&
                    selectedItem.brand === item.brand
            );
            return !matchingItem;
        });
        setAvailableItems(newAvailableItems);
        localStorage.setItem(
            "availableItems",
            JSON.stringify(newAvailableItems)
        );
    };

    const addToStock = (items) => {
        const newAvailableItems = [...availableItems, ...items];
        setAvailableItems(newAvailableItems);
        localStorage.setItem(
            "availableItems",
            JSON.stringify(newAvailableItems)
        );
    };

    const deleteSet = (index) => {
        const newSets = [...completedSets];
        const deletedSet = newSets.splice(index, 1);
        addToStock(deletedSet[0]);
        setCompletedSets(newSets);
        localStorage.setItem("completedSets", JSON.stringify(newSets));
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
                localStorage.setItem("availableItems", JSON.stringify(data));
            } catch (error) {
                console.log("Error fetching data from the API:", error);
            }
        };

        const savedAvailableItems = localStorage.getItem("availableItems");
        const savedCompletedSets = localStorage.getItem("completedSets");

        if (savedAvailableItems && savedCompletedSets) {
            setAvailableItems(JSON.parse(savedAvailableItems));
            setCompletedSets(JSON.parse(savedCompletedSets));
        } else {
            fetchData();
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("completedSets", JSON.stringify(completedSets));
    }, [completedSets]);

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
