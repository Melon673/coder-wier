import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const ContactButtonBlue = ({
  label,
  type = "button",
  disabled = false,
  onClick,
  loading = false,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className="btn-primary group acc-selector contact-button"
      style={{
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1,
      }}
    >
      {loading && (
        <CircularProgress
          size={18}
          thickness={5}
          sx={{ color: "white", marginRight: "8px" }}
        />
      )}
      <span className="contact-label">{label}</span>
      <span className="hover-bg" />
      <span className="icon-wrapper">
        <span className="icon-items">
          {[...Array(3)].map((_, i) => (
            <span className="icon" key={i}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="svg-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </span>
          ))}
        </span>
      </span>
    </button>
  );
};

export default ContactButtonBlue;
