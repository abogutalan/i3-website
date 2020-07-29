import React from "react";
import Counselor from "./Counselor";

const Counselors = ({ counselors }) =>
    counselors.map((counselor, idx) => <Counselor key = { idx } { ...counselor } />);

export default Counselors;