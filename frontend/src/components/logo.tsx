import React from "react";

function Logo() {
  return (
    <div>
      <svg
        width='60'
        height='60'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g>
          <title>background</title>
          <rect
            fill='none'
            id='canvas_background'
            height='62'
            width='62'
            y='-1'
            x='-1'
          />
          <g
            display='none'
            overflow='visible'
            y='0'
            x='0'
            height='100%'
            width='100%'
            id='canvasGrid'
          >
            <rect
              fill='url(#gridpattern)'
              stroke-width='0'
              y='0'
              x='0'
              height='100%'
              width='100%'
            />
          </g>
        </g>
        <g>
          <title>Layer 1</title>
          <ellipse
            stroke='#000'
            ry='29.105043'
            rx='29.212184'
            id='svg_4'
            cy='30.090331'
            cx='30.027302'
            stroke-width='1.5'
            fill='#edc62a'
          />
          <text
            font-weight='bold'
            font-style='normal'
            stroke='#000'
            transform='matrix(3.1576203979257116,0,0,2.834567466377507,-44.60143423035672,3.2728707210788923) '
            // xml:space='preserve'
            text-anchor='start'
            font-family='Oswald, sans-serif'
            font-size='24'
            id='svg_5'
            y='15.529262'
            x='17.0476'
            stroke-width='0'
            fill='#000000'
          >
            x
          </text>
        </g>
      </svg>
    </div>
  );
}

export default Logo;
