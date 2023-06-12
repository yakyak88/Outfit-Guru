import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
    const { availableItems, type, setType } = useContext(AppContext);
    const navigate = useNavigate();
    console.log(availableItems?.data?.length);

    const handleButtonClick = (itemType) => {
        setType(itemType);
        navigate(`/items/${itemType}`);
    };
    return (
        availableItems?.data?.length > 0 && (
            <div className="container">
                <h1 className="mt-5 text-center ">OUTFIT_GURU</h1>
                <div className="mt-5 text-center">
                    <h5 className="mb-4     ">
                        <span className="fw-bold">סטים שמורים:</span>{" "}
                    </h5>
                    <h5 className="mb-4     ">
                        <span className="fw-bold">נעליים זמינות:</span>{" "}
                        {
                            availableItems.data.filter(
                                (item) => item.type === "shoes"
                            ).length
                        }
                    </h5>

                    <h5 className="mb-4     ">
                        <span className="fw-bold">חולצות זמינות:</span>{" "}
                        {
                            availableItems.data.filter(
                                (item) => item.type === "shirt"
                            ).length
                        }
                    </h5>
                    <h5 className="mb-4     ">
                        <span className="fw-bold">מכנסיים זמינים:</span>{" "}
                        {
                            availableItems.data.filter(
                                (item) => item.type === "pants"
                            ).length
                        }
                    </h5>
                </div>
                <div className="mt-5 d-flex justify-content-center">
                    <button
                        className="btn btn-primary me-3"
                        onClick={() => handleButtonClick("shoes")}
                    >
                        בחירת נעליים
                    </button>
                    <button
                        className="btn btn-success me-3"
                        onClick={() => handleButtonClick("shirt")}
                    >
                        בחירת חולצה
                    </button>
                    <button
                        className="btn btn-info me-3"
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
