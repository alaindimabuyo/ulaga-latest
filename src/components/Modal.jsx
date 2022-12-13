import React, { useEffect } from "react";
import check from "../assets/check.png";
import wrong from "../assets/wrong.png";

const Modal = ({ onRequestClose, correct, setNextQuestion }) => {
  console.log(correct);

  const closeModal = () => {
    onRequestClose();
    setNextQuestion();
  };
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.keyCode === 27) {
        // Close the modal when the Escape key is pressed
        onRequestClose();
        setNextQuestion();
      }
    };

    // Prevent scolling
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    // Clear things up when unmounting this component
    return () => {
      document.body.style.overflow = "visible";
      document.removeEventListener("keydown", onKeyDown);
    };
  });
  return (
    <div className="modal__backdrop">
      <div className="modal__container">
        {correct.correct && (
          <div>
            <h5
              style={{ color: "black", textAlign: "center", fontSize: "30px" }}
            >
              <div className="img_container">
                <img src={check} alt="" width={200} />
              </div>
              ISTUNG SAGUT
            </h5>
            <h2 style={{ color: "black" }}>{correct.answer}</h2>
          </div>
        )}
        {!correct.correct && (
          <h5 style={{ color: "black", textAlign: "center", fontSize: "30px" }}>
            <div className="img_container">
              <img src={wrong} alt="" width={200} />
            </div>
            MALI YA!
          </h5>
        )}
        <button
          type="button"
          onClick={correct.correct ? closeModal : onRequestClose}
          style={{ width: "300px" }}
        >
          {" "}
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
