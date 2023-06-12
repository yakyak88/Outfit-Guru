import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";

const ClothingItemsScreen = () => {
    const { type } = useParams();
    const { availableItems, setType, selectedItems, setSelectedItems } =
        useContext(AppContext);
    const navigate = useNavigate();

    const filteredItems = availableItems.data.filter(
        (item) => item.type === type
    );

    const clothingTypes = ["shoes", "shirt", "pants"];

    const handleButtonClick = (itemType, item) => {
        setType(itemType);
        setSelectedItems([...selectedItems, item]);
        const currentIndex = clothingTypes.indexOf(itemType);
        if (selectedItems.length + 1 === 3) {
            navigate("/");
        } else {
            const nextIndex = (currentIndex + 1) % clothingTypes.length;
            const nextType = clothingTypes[nextIndex];
            navigate(`/items/${nextType}`);
        }
    };

    return (
        <div className="container">
            <h1 className="mt-5 text-center">בחירת פריט לבוש - {type}</h1>
            <div className="row mt-5">
                {filteredItems.map((item) => (
                    <div className="col-md-4 mb-4" key={item.id}>
                        <div className="card">
                            <img
                                src={item.image}
                                className="card-img-top"
                                alt={item.type}
                            />
                            <div className="card-body">
                                <p className="card-text">
                                    <strong>מותג:</strong> {item.brand}
                                </p>
                                <p className="card-text">
                                    <strong>צבע:</strong> {item.color}
                                </p>
                                <p className="card-text">
                                    <strong>מידה:</strong> {item.size}
                                </p>
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
