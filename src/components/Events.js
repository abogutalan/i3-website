<<<<<<< HEAD
import React from "react";
import Event from "./Event";

const Events = ({ events }) =>
    events.map((event, idx) => <Event key={idx} {...event} />);

=======
import React from "react";
import Event from "./Event";

const Events = ({ events }) =>
    events.map((event, idx) => <Event key={idx} {...event} />);

>>>>>>> 789b9f40187ba197de223d8740469e5b27976967
export default Events;