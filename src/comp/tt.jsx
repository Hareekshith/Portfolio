import React from 'react';
import { ReactTyped } from "react-typed";

const TypedText = () => {
  return (
    <span className="font-mono text-2xl sm:text-3xl text-[#d97706] font-semibold tracking-tight inline-block">
      <ReactTyped
        strings={[
          "Monitor.", 
          "Exploit.", 
          "Analyse.",
          "Repeat."
        ]}
        typeSpeed={55}
        backSpeed={25}
        loop
      />
    </span>
  );
};

export default TypedText;
