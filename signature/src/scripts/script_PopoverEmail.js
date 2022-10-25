import React, { useState, useRef } from "react";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";

import RegEx from "./script_RegEx.js";
import "../css/formularios.css";

export default function PopoverEmail() {
  //POPUP
  const [showPop, setShowPop] = useState(false);
  const [targetPop, setTargetPop] = useState(null);
  const ref = useRef(null);
  const focus = false;

 
  const handleChange = (event) => {
    console.log("Input gained focus");
  };

  const handleInputFocus = (event) => {
    console.log("Input gained focus");
  };

  const handleInputBlur = (event) => {

    console.log("Input lost focus");

    if (event.target.value !== "") {
      if (event.target.value.match(RegEx.regEmail)) {
        setShowPop(!showPop);
        setTargetPop(event.target);
        console.log("listo");
      } else {
        setShowPop(!showPop);
        setTargetPop(event.target);
        console.log("entra aqui");
      }
    }
  };

  return (
    <>
      <input
        type="text"
        onChange={handleChange}
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        name="R_Email"
        id="correo"
        required
      />
      <span class="barra"></span>
      <label class="datos-form" for="">
        Correo Electronico
      </label>

      <div ref={ref}>
        <Overlay
          show={showPop}
          target={targetPop}
          placement="left"
          container={ref}
          containerPadding={0}
        >
          <Popover id="popover-contained">
            <Popover.Body>
              <img
                className="alertForm"
                src={require("../recursos/images/icons/comment-error-solid-24.png")}
              />
            </Popover.Body>
          </Popover>
        </Overlay>
      </div>
    </>
  );
}
