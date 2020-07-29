import React from "react";
import SlideTestimonial from "./SlideTestimonial";

const SlideTestimonials = ({ slidetestimonials }) => 
    slidetestimonials.map((slidetestimonial, idx) => <SlideTestimonial key={idx} {...slidetestimonial} />);

export default SlideTestimonials;