import React, { useContext } from "react";
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

    const filteredItems = availableItems.filter((item) => item.type === type);

    const clothingTypes = ["shoes", "shirt", "pants"];

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
            navigate("/");
        } else {
            const nextType = getNextType(itemType);
            navigate(`/items/${nextType}`);
        }
    };

    return (
        <div className="container">
            <h1 className="mt-5 text-center">בחירת פריט לבוש - {type}</h1>
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
