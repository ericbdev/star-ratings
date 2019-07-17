import React from "react";

const Star = props => {
  const { rating, id } = props;
  const startValue = `${rating}%`;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480" width="60px">
      <defs>
        <linearGradient id={id} x1="0" y1="1" x2="0" y2="0">
          <stop id="stop1" offset={startValue} stopColor="#FFD700" />
          <stop id="stop2" offset={startValue} stopColor="transparent" />
          <stop id="stop3" offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>

      <path
        d="
          M 172 172
          M 172.000 252.000
          L 266.046 301.443
          L 248.085 196.721
          L 324.169 122.557
          L 219.023 107.279
          L 172.000 12.000
          L 124.977 107.279
          L 19.831 122.557
          L 95.915 196.721
          L 77.954 301.443
          L 172.000 252.000
         "
        stroke="#000000"
        strokeWidth="3"
        fill={`url(#${id})`}
      />
    </svg>
  );
};

export default Star;
