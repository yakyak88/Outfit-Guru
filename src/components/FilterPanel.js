import React from "react";

const FilterPanel = ({
    showFilters,
    colors,
    sizes,
    filters,
    handleFilterChange,
    toggleFilters,
}) => {
    return (
        <>
            <button
                className={`btn btn-light border mb-3 ${
                    showFilters ? "active" : ""
                }`}
                type="button"
                onClick={toggleFilters}
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
        </>
    );
};

export default FilterPanel;
