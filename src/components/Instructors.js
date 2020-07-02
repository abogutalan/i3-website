import React from "react";
import Instructor from "./Instructor";

const Instructors = ({ instructors }) =>
    instructors.map((instructor, idx) => <Instructor key={idx} {...instructor} />);

export default Instructors;