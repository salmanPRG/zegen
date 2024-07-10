import React from "react";
import "./EventsCards.css"
import img1 from "../Assets/events_imgs1-1.jpg";
import img2 from "../Assets/events_imgs3-1-1170x694.jpg";
import { FiPlay } from "react-icons/fi";


const EventsCards = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-8">
        <div class="event1 mt-4">
      <p>
        Mauris id enim id purus ornare tincidunt. Aenean vel consequat risus.
        Proin viverra nisi at nisl imperdiet auctor. Donec ornare, est sed
        tincidunt placerat, sem mi suscipit mi, at varius enim sem at sem.
        Fusce tempus ex nibh, eget vulputate ligula ornare eget. Nunc
        facilisis erat at ligula blandit tempor. Pellentesque elit arcu,
        finibus ut rutrum vel, dapibus eget nisi. Suspendisse at venenatis
        arcu, et accumsan ante. congue ut faucibus et, mattis in ante.
      </p>
      <div class="info10">
        <p>
          Sermon <span>Description</span>
        </p>
      </div>
      <p>
        We have a strong sense of community with parishioners. People and
        children of all ages here are encouraged to learn about their own
        faith and the role of the church in our community and worldwide.
      </p>
    </div>
          <div className="left-side">
            <div class="container">
              <div class="event-card ">
                <div class="ecard col d-flex ">
                  <div class="col">
                    <img src={img1} alt="" class="img-fluid" />
                  </div>
                  <div class="col">
                    <img src={img2} alt="" class="img-fluid" />
                  </div>
                </div>
              </div>
              <div class="info11 mb-4">
                <p>
                  Event <span>Gallery</span>
                </p>
                <label>
                  We have a strong sense of community with parishioners. People
                  and children of all ages here are encouraged to learn about
                  their own faith and the role of the church in our community
                  and worldwide.
                </label>
              </div>
              <div className="row">
                <div class="event-card1 d-flex">
                  <div class="col">
                    <div class="ecard3">
                      <div class="events-overlay"></div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="ecard4">
                      <div class="events-overlay"></div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="ecard5">
                      <div class="events-overlay"></div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="ecard6">
                      <div class="events-overlay"></div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="ecard7">
                      <div class="events-overlay"></div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="ecard8">
                      <div class="events-overlay"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-event">
            <div className="event-play">
              <div className="event-icon">
                <div className="event-circle"></div>
                <FiPlay />
              </div>
              <div className="event-info">
                <h3>
                  “Pray! And listen to God! You can do this alone, but find
                  somebody to do it with you”
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div class="col col-lg-4 col-md-6 mt-4 mb-4">
          <div className="event2">
            <div className="heading4">
              <h2>Event Details</h2>
            </div>
            <div className="event-details">
              <div className="detail5">
                <label>Organizer:</label>
                <span>Zegen Church Team</span>
              </div>
              <div className="detail5">
                <label>Start Date: </label>
                <span>Feb 12</span>
              </div>
              <div className="detail5">
                <label>End Date: </label>
                <span>Mar 4</span>
              </div>
              <div className="detail5">
                <label>Time: </label>
                <span>7.00 am</span>
              </div>
              <div className="detail5">
                <label>Cost: </label>
                <span>Free</span>
              </div>
            </div>
          </div>
          <div className="event2">
            <div className="heading4">
              <h2>Event Venue</h2>
            </div>
            <div className="event-venue">
              <div className="detail5">
                <label>Venue:</label>
                <span>Zegen Church</span>
              </div>
              <div className="detail5">
                <label>Address:</label>
                <span>12, Victoria Street, Australia</span>
              </div>
              <div className="detail5">
                <label>E-mail:</label>
                <span>zegen@admin.com</span>
              </div>
              <div className="detail5">
                <label>Phone:</label>
                <span>+1 (541) 754-3010</span>
              </div>
              <div className="detail5">
                <label>Website:</label>
                <span>https://zozothemes.com/</span>
              </div>
            </div>
          </div>
          <div className="event2">
            <div className="heading4">
              <h2>Event Registration</h2>
            </div>
            <div className="event-registration">
              <form>
                <div className="input-group">
                  <span htmlFor="name">Name:</span>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="input-group">
                  <span htmlFor="email">Email:</span>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="input-group">
                  <span htmlFor="phone">Phone:</span>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Your Phone Number"
                    required
                  />
                </div>
                <div className="select-group">
                  <span htmlFor="event">Select Event:</span>
                  <select id="event">
                    <option value="">Select an Event</option>
                  </select>
                </div>
                <button type="submit" className="send-button">
                  Send Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsCards;
