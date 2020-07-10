import React from "react";
import Testimonial from "./Testimonial";

const Testimonials = ({ testimonials }) =>
testimonials.map((testimonial, idx) => <Testimonial key={idx} {...testimonial} />);

export default Testimonials;