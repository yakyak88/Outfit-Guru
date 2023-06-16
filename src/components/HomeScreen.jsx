import React, { useContext, useEffect } from "react";
import { AppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const HomeScreen = () => {
    const {
        availableItems,
        completedSets,
        setType,
        selectedItems,
        setSelectedItems,
        resetSelectedItems,
    } = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (selectedItems.length === 3) {
            navigate("/");
            setSelectedItems([]);
        }
    }, [selectedItems, navigate, setSelectedItems]);

    const handleButtonClick = (itemType) => {
        setType(itemType);
        navigate(`/items/${itemType}`);
    };

    useEffect(() => {
        resetSelectedItems();
    }, []);

    return (
        availableItems?.length > 0 && (
            <div className="container">
                <h1 className="mt-5 text-center ">OUTFIT_GURU</h1>
                <div className="mt-5 text-center">
                    <Link
                        style={{
                            textDecoration: "none", // Remove underline
                            color: "inherit",
                        }}
                        to={"/saved-sets"}
                    >
                        {" "}
                        <h5 className="mb-4 ">
                            <span className="fw-bold">סטים שמורים:</span>{" "}
                            {completedSets.length}
                        </h5>
                    </Link>
                    <h5 className="mb-4     ">
                        <span className="fw-bold">נעליים זמינות:</span>{" "}
                        {
                            availableItems.filter(
                                (item) => item.type === "shoes"
                            ).length
                        }
                    </h5>

                    <h5 className="mb-4     ">
                        <span className="fw-bold">חולצות זמינות:</span>{" "}
                        {
                            availableItems.filter(
                                (item) => item.type === "shirt"
                            ).length
                        }
                    </h5>
                    <h5 className="mb-4     ">
                        <span className="fw-bold">מכנסיים זמינים:</span>{" "}
                        {
                            availableItems.filter(
                                (item) => item.type === "pants"
                            ).length
                        }
                    </h5>
                </div>
                <div className="mt-5 d-flex justify-content-center">
                    <button
                        className="btn btn-light border me-3"
                        onClick={() => handleButtonClick("shoes")}
                    >
                        בחירת נעליים
                    </button>
                    <button
                        className="btn btn-light border me-3"
                        onClick={() => handleButtonClick("shirt")}
                    >
                        בחירת חולצה
                    </button>
                    <button
                        className="btn btn-light border me-3"
                        onClick={() => handleButtonClick("pants")}
                    >
                        בחירת מכנסיים
                    </button>
                </div>
            </div>
        )
    );
};

export default HomeScreen;
