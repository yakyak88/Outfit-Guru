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
        setStartTime,
    } = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (selectedItems.length === 3) {
            navigate("/");
            setSelectedItems([]);
        }
    }, [selectedItems, navigate, setSelectedItems]);

    const handleButtonClick = (itemType) => {
        setStartTime(new Date());
        setType(itemType);
        navigate(`/items/${itemType}`);
    };

    useEffect(() => {
        resetSelectedItems();
    }, []);

    const getAvailableItemCount = (itemType) => {
        return availableItems.filter((item) => item.type === itemType).length;
    };

    const isButtonDisabled = (itemType) => {
        return getAvailableItemCount(itemType) === 0;
    };

    return (
        <div className="container">
            <h1 className="mt-5 text-center display-4 fw-bold">OUTFIT_GURU</h1>
            <div className="my-5">.</div>
            <div className="my-2 text-center bg-light border border-1 p-3">
                <Link
                    style={{
                        textDecoration: "none",
                        color: "inherit",
                    }}
                    to={"/saved-sets"}
                >
                    <h3 className="fw-bold mb-3">סטים שמורים:</h3>
                    <h3 className="fs-3">{completedSets.length}</h3>
                </Link>
            </div>
            <div className="my-5">.</div>
            <div className="row mt-5 ">
                <div className="col">
                    <div className="text-center">
                        <h5 className=" fs-5 mb-2 fw-bold">מכנסיים זמינים:</h5>
                        <h5>{getAvailableItemCount("pants")}</h5>
                        <button
                            className="btn btn-light border my-3"
                            onClick={() => handleButtonClick("pants")}
                            disabled={isButtonDisabled("pants")}
                        >
                            בחירת מכנסיים
                        </button>
                    </div>
                </div>
                <div className="col">
                    <div className="text-center">
                        <h5 className=" fs-5 mb-2 fw-bold">חולצות זמינות:</h5>
                        <h5>{getAvailableItemCount("shirt")}</h5>
                        <button
                            className="btn btn-light border my-3"
                            onClick={() => handleButtonClick("shirt")}
                            disabled={isButtonDisabled("shirt")}
                        >
                            בחירת חולצות
                        </button>
                    </div>
                </div>
                <div className="col">
                    <div className="text-center">
                        <h5 className=" fs-5 mb-2 fw-bold">נעליים זמינות:</h5>
                        <h5>{getAvailableItemCount("shoes")}</h5>
                        <button
                            className="btn btn-light border my-3"
                            onClick={() => handleButtonClick("shoes")}
                            disabled={isButtonDisabled("shoes")}
                        >
                            בחירת נעליים
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeScreen;
