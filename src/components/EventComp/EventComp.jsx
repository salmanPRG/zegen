import React from "react";
import Events from "./Events";
import EventMain from "./EventMain";
import EventsCards from "./EventsCards";
import Map from "./Map";
const EventComp = () => {
  return (
    <div>
      <Events />
      <EventMain />
      <EventsCards />
      <Map />
    </div>
  );
};

export default EventComp;
