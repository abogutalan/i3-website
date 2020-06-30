import React from "react";
import Fellow from "./Fellow";

const Fellows = ({ fellows }) =>
    fellows.map((fellows, idx) => <Fellow key={idx} {...fellows} />);

export default Fellows;