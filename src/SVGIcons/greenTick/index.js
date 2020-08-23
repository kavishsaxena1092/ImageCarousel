import React from 'react';

export default function greenTick() {
	return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
        <g fill="none" fillRule="evenodd">
          <circle cx="9" cy="9" r="9" fill="#008000"/>
          <path
            fill="#FFF" stroke="#FFF"
            d="M6.875 12.85L4.177 9.762c-.176-.2-.253-.33-.078-.531.175-.2.31-.027.485.173l2.61 2.942 6.18-7.034c.175-.2.36-.436.535-.236.176.201.073.368-.103.57L7.51 12.85a.42.42 0 0 1-.318.15.424.424 0 0 1-.317-.15z"/>
        </g>
    </svg>
  );
}