import React from "react";
// import carousel from 'react-elastic-carousel'
import SlideTestimonial from "./SlideTestimonial";

const SlideTestimonials = ({ slidetestimonials }) => 
    slidetestimonials.map((slidetestimonial, idx) => <SlideTestimonial key={idx} {...slidetestimonial} />);

export default SlideTestimonials;