import React from "react";
import "./Map.css"

const Map = () => {
  return (
    <div className="event-map">
      <div className="map3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3228.546411099218!2d146.61835817560598!3d-35.9825134724915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b21410e515decff%3A0x99e025d1fa1007f0!2s12%20Victoria%20St%2C%20Howlong%20NSW%202643%2C%20Australia!5e0!3m2!1sen!2sin!4v1718786102529!5m2!1sen!2sin"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
