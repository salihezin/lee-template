import React from "react";
import {Chart} from "primereact/chart";

const OverviewChartWithTwoData = ({ lineData, lineOptions }) => {
    return (
        <div className="card">
            <h5>Sales Overview</h5>
            <Chart type="line" data={lineData} options={lineOptions}/>
        </div>
    );
}

export default OverviewChartWithTwoData;
