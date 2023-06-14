import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";

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
            alert("הסט נבחר בהצלחה!");
            navigate("/");
        } else {
            const nextType = getNextType(itemType);
            navigate(`/items/${nextType}`);
        }
    };

    return (
        <div className="container">
            <button
                className={`btn btn-light border mb-3 ${
                    showFilters ? "active" : ""
                }`}
                type="button"
                onClick={() => setShowFilters(!showFilters)}
            >
                סינון
            </button>

            {showFilters && (
                <div className="card mb-3">
                    <div className="card-body">
                        <div className="mb-3">
                            <span>סנן לפי צבע:</span>
                            <div className="d-flex flex-wrap">
                                {colors.map((color) => (
                                    <div className="form-check" key={color}>
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id={`color-${color}`}
                                            checked={filters.color.includes(
                                                color
                                            )}
                                            onChange={() =>
                                                handleFilterChange(
                                                    "color",
                                                    color
                                                )
                                            }
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor={`color-${color}`}
                                        >
                                            {color}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <span>סנן לפי מידה:</span>
                            <div className="d-flex flex-wrap">
                                {sizes.map((size) => (
                                    <div className="form-check" key={size}>
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id={`size-${size}`}
                                            checked={filters.size.includes(
                                                size
                                            )}
                                            onChange={() =>
                                                handleFilterChange("size", size)
                                            }
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor={`size-${size}`}
                                        >
                                            {size}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <h1 className="mt-5 text-center">בחירת - {type}</h1>
            <div className="row mt-5">
                {itemsToDisplay.map((item) => (
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
                                        <strong>המלצת הגורו:</strong> מומלץ מאוד
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
        </div>
    );
};

export default ClothingItemsScreen;
