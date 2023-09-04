import PropTypes from "prop-types";
import ArrowImg from "./assets/icon-arrow-down.svg";
import { useState } from "react";

function FAQ(props) {
  const [showAnswer, setShowAnswer] = useState(false);
  const handleClick = () => {
    setShowAnswer((state) => !state);
  };

  return (
    <li>
      <div>
        <p
          className={
            showAnswer
              ? "FAQContainer-List-Question dark-colored"
              : "FAQContainer-List-Question"
          }
        >
          {props.question}
        </p>
        {showAnswer && (
          <p className="FAQContainer-List-Answer">{props.answer}</p>
        )}
      </div>
      <button
        className={
          showAnswer
            ? "FAQContainer-List-Btn rotated-btn"
            : "FAQContainer-List-Btn"
        }
        id={"btn" + props.id}
        aria-label="question"
        onClick={handleClick}
      >
        <img src={ArrowImg} alt="" />
      </button>
    </li>
  );
}

FAQ.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
  id: PropTypes.number,
};

export default FAQ;
