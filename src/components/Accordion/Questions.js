import React from "react";
import illustrationBoxDesktop from ".././../assets/images/illustrationBoxDesktop.svg";
import bgPatternDesktop from ".././../assets/images/bgPatternDesktop.svg";
import illustrationWomanOnlineDesktop from ".././../assets/images/illustrationWomanOnlineDesktop.svg";

import Accordion from "./Accordion";

import "./Questions.css";

const Questions = (props) => {
  return (
    <main
      className="wrapper"
      style={{ backgroundImage: `url(${bgPatternDesktop})` }}
    >
      <div className="image__wrapper">
        <div
          className="image__wrapper_inner"
          style={{
            backgroundImage: `url(${illustrationWomanOnlineDesktop})`,
          }}
        ></div>
        <img className="box" src={illustrationBoxDesktop} alt="box" />
      </div>
      <div className="accordion__wrapper">
        <h1 className="title__accordion">FAQ</h1>
        <div className="questions__accordions">
          {props.questions.map((question) => (
            <Accordion
              key={question.id}
              question={question.question}
              answer={question.answer}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Questions;
