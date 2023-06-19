import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

const SavedSetsScreen = () => {
    const { completedSets, deleteSet } = useContext(AppContext);

    return (
        <div className="container">
            <h1 className="text-center my-5">הסטים שלי</h1>
            {completedSets.length === 0 && (
                <h5 className="text-center my-5">אין סטים שמורים</h5>
            )}
            <div className="row">
                {completedSets.map((set, index) => (
                    <div className="col-lg-4 col-md-6 mb-4" key={index}>
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">
                                    סט מספר {index + 1}
                                </h5>
                                {set.setItems.map((item) => (
                                    <div key={item.id}>
                                        <img
                                            src={`https://via.placeholder.com/150?text=${item.type}`}
                                            alt={item.type}
                                            className="img-fluid mb-2"
                                        />
                                        <p className="card-text">
                                            {item.type}: {item.brand},{" "}
                                            {item.color}, {item.size}
                                        </p>
                                    </div>
                                ))}
                                <p className="card-text mt-4">
                                    תאריך יצירה:{" "}
                                    {new Date(
                                        set.creationDate
                                    ).toLocaleString()}
                                </p>
                                <button
                                    className="btn btn-dark mt-3"
                                    onClick={() => deleteSet(index)}
                                >
                                    <i class="bi bi-trash"></i>{" "}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SavedSetsScreen;
