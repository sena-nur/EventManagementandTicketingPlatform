import React from "react";
import "../ActivityDetails.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const ActivityDetails = () => {
  const [ticket, setTicket] = useState(null);
  const navigate = useNavigate();

  const location = useLocation();
  const { sentence } = location.state || {};

  const handleBuyTicketClick = (event) => {
    // setTicket(event === ticket ? null : event);
    navigate("/buy", { state: { ticketValues: sentence } });
  };

  return (
    <div className="nav-and-search">
      <Navbar />
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search for event artists or venues"
        />
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </div>

      <div className="container">
        <div className="grid-main">
          <div className="img-container">
            <div className="img-inside-container">
              <img className="img-detail" src="concert-detail.png" alt="" />
            </div>
          </div>

          <div className="detail-content">
            <div className="main-content general-content-container">
              <div className="main-heading-container">
                <h1 className="main-heading">{sentence.name}</h1>
              </div>

              <div className="type-container">
                <p className="type">{sentence.details.genre}</p>
              </div>

              <div className="details-container">
                <h4 className="details-heading">Event details:</h4>

                <p className="details">{sentence.details.description}</p>
              </div>

              <div className="tickets-and-artists">
                <div className="tickets-container">
                  <button href="#buy" className="btn-tickets">
                    Tickets
                  </button>
                </div>

                <div className="artists-container">
                  <button className="btn-artists">Artists</button>
                </div>
              </div>

              <div className="favorites-container">
                <button id="buy" className="btn-favorites">
                  Add to Favorites
                </button>
              </div>
            </div>

            <div className="buy-content general-content-container">
              <div className="buy-and-date-grid">
                <h4>Buy Ticket</h4>
                <h5>Select Date</h5>
              </div>

              <div
                className="buy-content-inside"
                onClick={handleBuyTicketClick}
              >
                <h5>{sentence.date}</h5>
                <p>{sentence.location}</p>

                <div className="price-container">
                  <p className="price">{sentence.price}</p>
                  <p className="price-text">Starting Prices</p>
                </div>

                <button className="btn-buy">Buy Ticket</button>
              </div>
            </div>

            <div className="artist-content general-content-container">
              <div>
                <h4 className="artists">Artists</h4>
                <div className="img-and-artist">
                  <div className="img-container--artist">
                    <img
                      src="concert-detail.png"
                      alt=""
                      className="artist-img"
                    />
                  </div>
                  <div className="artist-name">
                    <h5>{sentence.details.artists[0]}</h5>
                  </div>
                </div>
              </div>

              <div className="">
                <div className="address-content">
                  <h4 className="address-heading">{sentence.location}</h4>

                  <div className="address-container">
                    <p>{sentence.address}</p>
                  </div>

                  <div className="buttons-address-container">
                    <div className="btn-location-div">
                      <button className="btn-location">Location</button>
                      <button className="btn-address-review">
                        Review Place
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetails;
