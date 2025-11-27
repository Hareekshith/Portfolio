import React from 'react';
import { ReactTyped } from "react-typed";

const TypedText = () => {
  return (
    <span 
      id="traits" 
      // Removed 'h-10' and 'inline-block' classes
      className="text-amber-accent font-title" 
    >
      <ReactTyped
        strings={[
          "Code Projects.", 
          "Edit videos and photos.", 
          "solve Math."
        ]}
        typeSpeed={150}
        backSpeed={150}
        loop
      />
    </span>
  );
};

export default TypedText;
