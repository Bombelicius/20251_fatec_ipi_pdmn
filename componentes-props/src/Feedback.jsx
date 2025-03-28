//rafce
import React from "react";
const Feedback = ({textoOK, funcaoOK, textoNOK, onClick2}) => {
  return (
    <div className="d-flex justify-content-evenly">
        <button className="btn btn-primary" onClick={funcaoOK}>
            {textoOK}
        </button>
        <button className="btn btn-secondary" onClick={funcaoNOK}>
            {textoNOK}
        </button>
    </div>
  );
};
export default Feedback