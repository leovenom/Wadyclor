import React from 'react';

const ButtonSvg = (orange) => (
  <>
    <svg
      className="absolute top-0 left-0"
      width="21"
      height="44"
      viewBox="0 0 21 44"
    >
      <path
        fill={orange ? "#CE5623" : "none"}
        stroke={orange ? "#CE5623" : "url(#btn-left)"} // mentioned in ButtonGradient.jsx
        strokeWidth="2"
        d="M21,43.00005 L8.11111,43.00005 C4.18375,43.00005 1,39.58105 1,35.36365 L1,8.63637 C1,4.41892 4.18375,1 8.11111,1 L21,1"
      />
    </svg>
    <svg
      className="absolute top-0 left-[1.3rem] w-[calc(100%-2.625rem)]"
      height="44"
      viewBox="0 0 100 44"
      preserveAspectRatio="none"
      fill={orange ? "#CE5623" : "none"}
    >
      {orange ? (
        <polygon
          fill="#CE5623"
          fillRule="nonzero"
          points="100 0 100 44 0 44 0 0"
        />
      ) : (
        <>
          <polygon
            fill="url(#btn-top)" // mentioned in ButtonGradient.jsx
            fillRule="nonzero"
            points="100 42 100 44 0 44 0 42"
          />
          <polygon
            fill="url(#btn-bottom)" // mentioned in ButtonGradient.jsx
            fillRule="nonzero"
            points="100 0 100 2 0 2 0 0"
          />
        </>
      )}
    </svg>
        <svg
      className="absolute top-0 right-0"
      width="22"
      height="44"
      viewBox="0 0 22 44"
    >
  <path
  fill={orange ? "#CE5623" : "none"}
  stroke={orange ? "#CE5623" : "url(#btn-right)"}
  strokeWidth="2"
  transform="rotate(180, 10.5, 22)"
  d="M21,43.00005 L8.11111,43.00005 C4.18375,43.00005 1,39.58105 1,35.36365 L1,8.63637 C1,4.41892 4.18375,1 8.11111,1 L21,1"
/>

    </svg>
  </>
);

export default ButtonSvg;
