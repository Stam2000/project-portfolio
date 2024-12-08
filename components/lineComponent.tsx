import React from 'react';

const DiagonalLines = ({ width = 100, height = 400, lineSpacing = 20, className = '' }) => {
  return (
    <div className={`absolute bottom-[32%] -right-[90px] ${className}`} style={{ width, height }}>
      <svg 
        className="w-full h-full"
        viewBox={`0 0 ${width} ${height}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          {Array.from({ length: Math.ceil((width + height) / lineSpacing) }).map((_, index) => (
            <line
              key={index}
              x1={index * lineSpacing}
              y1={0}
              x2={index * lineSpacing - height}
              y2={height}
              className="stroke-white stroke-2"
            />
          ))}
        </g>
      </svg>
    </div>
  );
};

export default DiagonalLines;