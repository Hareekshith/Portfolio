import React from 'react';
import { ReactTyped } from "react-typed";

const TypedText = () => {
  return (
    <h1 
      // Removed 'h-10' and 'inline-block' classes
      className="font-title text-3xl sm:text-4xl inline-block" 
    >
      <ReactTyped
        className="text-amber-accent"
        strings={[
          "Programmer.", 
          "Defender.", 
          "Editor."
        ]}
        typeSpeed={150}
        backSpeed={15}
        loop
      />
    </h1>
  );
};

export default TypedText;
