import React from "react";

const HalfCard = (props) => {
    return (
        <div className="col-12 xl:col-6">
            {props.children}
        </div>
    );

}

export default HalfCard;
