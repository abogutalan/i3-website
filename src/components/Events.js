import React from "react";
import Event from "./Event";

const Events = ({ events }) =>
    events.map((event, idx) => <Event key={idx} {...event} />);

export default Events;