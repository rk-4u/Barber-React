import React from 'react';
import './BookSeat.css';

const BookSeat = ({ onClose }) => {
  return (
    <div>
      {/* Overlay for blur effect */}
      <div className="blur-overlay" onClick={onClose}></div>

      {/* Form container */}
      <div className="form-container">
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "transparent",
            border: "none",
            color: "white",
            cursor: "pointer",
            fontSize: "18px",
          }}
          aria-label="Close Form"
        >
          ✖
        </button>
        <form className="form">
          <div className="form-group">
            <label htmlFor="email">Company Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email"
              required=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="textarea">How Can We Help You?</label>
            <textarea
              name="textarea"
              id="textarea"
              placeholder="Describe your issue"
              rows="10"
              cols="50"
              required=""
            ></textarea>
          </div>
          <button className="form-submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookSeat;
