import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";

const ClothingItemsScreen = () => {
    const { type } = useParams();
    const {
        availableItems,
        selectedItems,
        setSelectedItems,
        removeItemsFromStock,
    } = useContext(AppContext);
    const navigate = useNavigate();

    const [filterColor, setFilterColor] = useState([]);
    const [filterSize, setFilterSize] = useState([]);
    const [showFilters, setShowFilters] = useState(false);

    const handleColorChange = (color) => {
        setFilterColor((prevColors) =>
            prevColors.includes(color)
                ? prevColors.filter((c) => c !== color)
                : [...prevColors, color]
        );
    };

    const handleSizeChange = (size) => {
        setFilterSize((prevSizes) =>
            prevSizes.includes(size)
                ? prevSizes.filter((s) => s !== size)
                : [...prevSizes, size]
        );
    };
    const filteredItems = availableItems
        .filter((item) => item.type === type)
        .filter((item) =>
            filterColor.length > 0 ? filterColor.includes(item.color) : true
        )
        .filter((item) =>
            filterSize.length > 0 ? filterSize.includes(item.size) : true
        );

    const clothingTypes = ["shoes", "shirt", "pants"];

    const colors = ["black", "white", "red", "green", "pink"];
    const sizes = [
        "S",
        "L",
        "XL",
        "XXL",
        30,
        31,
        32,
        34,
        35,
        36,
        39,
        42,
        43,
        45,
        48,
    ];

    const getNextType = (currentType) => {
        const currentIndex = clothingTypes.indexOf(currentType);
        const nextIndex = (currentIndex + 1) % clothingTypes.length;
        return clothingTypes[nextIndex];
    };

    const handleButtonClick = (itemType, item) => {
        const newSelectedItems = [...selectedItems, item];
        setSelectedItems(newSelectedItems);

        if (newSelectedItems.length === 3) {
            removeItemsFromStock(newSelectedItems);
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
                className="btn btn-light mb-3"
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
                                            checked={filterColor.includes(
                                                color
                                            )}
                                            onChange={() =>
                                                handleColorChange(color)
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
                                            checked={filterSize.includes(size)}
                                            onChange={() =>
                                                handleSizeChange(size)
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
                {filteredItems.map((item) => (
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
                                    className="btn btn-primary"
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
