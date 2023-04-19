import React, {useRef, useEffect, useState} from 'react';
import {carSvg} from "./svg-fixture.js";

console.log('carSvg', carSvg);

// parse the svg

``
function SVGEditor() {

  // let counter = 0;
  const [counter, setCounter] = useState(0);

  const ref = useRef(); // ignore this part

  useEffect(() => {
    if (ref.current) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(carSvg, 'image/svg+xml');
      const svgNode = doc.firstElementChild;
      console.log('svgNode',svgNode);

      const div = ref.current;
      div.appendChild(svgNode);
    }
  }, [ref]);

  useEffect(() => {
    console.log('running useEffect for counter ', counter);
  }, [counter]);

  // write code to convert a line into a cubic bezier curve

  const convertPathToCubicBezier = (path) => {
    // break a path into segments

    // for each segment, convert it to a cubic bezier curve
    // return the new path


  }


  const handleClick = () => {
    setCounter(counter + 1);
    // console.log('counter is ', counter);
  }

    return (
        <div>
          <h1>SVG Editor</h1>
          <div ref={ref}>
            This is the div element.
          </div>

          <div>
            Value of the counter is {counter}
          </div>

          <button onClick={handleClick}>
            Increment
          </button>

        </div>
    );
}

export default SVGEditor;