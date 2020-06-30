import React from "react";
import Location from "./Location";

const Locations = ({ locations }) =>
    locations.map((location, idx) => <Location key={idx} {...location} />);

export default Locations;