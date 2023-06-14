import React from "react";

const LogoBanner = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <img
                        src={"../../public/gurubanner.png"}
                        className="d-block w-100 carouselImg"
                        alt="..."
                    />
                </div>
            </div>
        </div>
    );
};

export default LogoBanner;
