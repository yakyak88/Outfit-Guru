import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";

const ClothingItemsScreen = () => {
    const { type } = useParams();
    const { availableItems } = useContext(AppContext);

    // Filter clothing items based on the type parameter
    const filteredItems = availableItems.data.filter(
        (item) => item.type === type
    );
    console.log(type);

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
                                <h5 className="card-title">{item.brand}</h5>
                                <p className="card-text">
                                    <strong>צבע:</strong> {item.color}
                                </p>
                                <p className="card-text">
                                    <strong>מידה:</strong> {item.size}
                                </p>
                                <button className="btn btn-primary">
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
