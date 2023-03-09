import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

import "./Accordion.css";

const Accordion = (props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="question-answer__accordion">
      <div className="question" onClick={() => setIsActive(!isActive)}>
        <h3
          className={isActive ? "clicked-title__question" : "title__question"}
        >
          {props.question}
        </h3>
        {isActive ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      {isActive && <div className="answer">{props.answer}</div>}
    </div>
  );
};

export default Accordion;
