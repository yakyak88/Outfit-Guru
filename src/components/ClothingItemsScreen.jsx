import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";
import FilterPanel from "./FilterPanel";
import {
    getPairRecommendation,
    getTripleRecommendation,
} from "../utils/recommendationAlgorithm";

const ClothingItemsScreen = () => {
    const { type } = useParams();
    const {
        availableItems,
        selectedItems,
        setSelectedItems,
        removeItemsFromStock,
        setCompletedSets,
    } = useContext(AppContext);
    const navigate = useNavigate();

    const [showFilters, setShowFilters] = useState(false);
    const [filters, setFilters] = useState({ color: [], size: [] });
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    useEffect(() => {
        // Reset filters when the type changes
        setFilters({ color: [], size: [] });
    }, [type]);

    const handleFilterChange = (filterType, value) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [filterType]: prevFilters[filterType].includes(value)
                ? prevFilters[filterType].filter((v) => v !== value)
                : [...prevFilters[filterType], value],
        }));
    };

    const allItemsOfType = availableItems.filter((item) => item.type === type);

    const filteredItems = allItemsOfType
        .filter((item) =>
            filters.color.length > 0 ? filters.color.includes(item.color) : true
        )
        .filter((item) =>
            filters.size.length > 0 ? filters.size.includes(item.size) : true
        );
    const itemsToDisplay =
        filters.color.length > 0 || filters.size.length > 0
            ? filteredItems.length > 0
                ? filteredItems
                : allItemsOfType
            : allItemsOfType;

    const colors = [...new Set(allItemsOfType.map((item) => item.color))];
    const sizes = [...new Set(allItemsOfType.map((item) => item.size))];

    const getNextType = (currentType) => {
        const clothingTypes = ["shoes", "shirt", "pants"];
        const currentIndex = clothingTypes.indexOf(currentType);
        const nextIndex = (currentIndex + 1) % clothingTypes.length;
        return clothingTypes[nextIndex];
    };

    const handleButtonClick = (itemType, item) => {
        const newSelectedItems = [...selectedItems, item];
        setSelectedItems(newSelectedItems);

        if (newSelectedItems.length === 3) {
            removeItemsFromStock(newSelectedItems);
            setCompletedSets((prevSets) => [...prevSets, newSelectedItems]);
            setShowSuccessMessage(true);

            setTimeout(() => {
                setShowSuccessMessage(false);
                navigate("/");
            }, 1000);
        } else {
            const nextType = getNextType(itemType);
            navigate(`/items/${nextType}`);
        }
    };

    const getRecommendationPercentage = (item) => {
        if (selectedItems.length > 0) {
            if (selectedItems.length === 1) {
                const firstItem = selectedItems[0];
                const recommendation = getPairRecommendation(firstItem, item);
                return Math.round(recommendation);
            } else if (selectedItems.length === 2) {
                const [firstItem, secondItem] = selectedItems;
                const recommendation = getTripleRecommendation(
                    firstItem,
                    secondItem,
                    item
                );
                return Math.round(recommendation);
            }
        }
        return 0;
    };

    const sortedItems = itemsToDisplay
        .slice()
        .sort(
            (a, b) =>
                getRecommendationPercentage(b) - getRecommendationPercentage(a)
        );

    return (
        <div className="container">
            {showSuccessMessage ? (
                <div className="text-center mt-3">
                    <div className="spinner-border text-success" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <p className="mt-2 text-success">הסט נשמר</p>
                </div>
            ) : (
                <>
                    <FilterPanel
                        showFilters={showFilters}
                        colors={colors}
                        sizes={sizes}
                        filters={filters}
                        handleFilterChange={handleFilterChange}
                        toggleFilters={() => setShowFilters(!showFilters)}
                    />

                    <h1 className="mt-5 text-center">בחירת - {type}</h1>
                    <div className="row mt-5">
                        {sortedItems.map((item) => (
                            <div className="col-6 col-md-4 mb-4" key={item.id}>
                                <div className="card clothing-card">
                                    <img
                                        src={`https://via.placeholder.com/300x200?text=${item.type}`}
                                        className="card-img-top"
                                        alt={item.type}
                                    />
                                    <div className="card-body">
                                        <p className="card-text fs-6">
                                            <strong>מותג:</strong> {item.brand}
                                        </p>
                                        <p className="card-text fs-6">
                                            <strong>צבע:</strong> {item.color}
                                        </p>
                                        <p className="card-text fs-6">
                                            <strong>מידה:</strong> {item.size}
                                        </p>
                                        {selectedItems.length > 0 && (
                                            <p className="card-text fs-6">
                                                <strong>התאמה:</strong>{" "}
                                                {selectedItems.length > 0
                                                    ? `${getRecommendationPercentage(
                                                          item
                                                      )}%`
                                                    : ""}
                                            </p>
                                        )}
                                        <button
                                            className="btn btn-light border"
                                            onClick={() =>
                                                handleButtonClick(type, item)
                                            }
                                        >
                                            בחירה
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default ClothingItemsScreen;
