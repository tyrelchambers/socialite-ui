import React from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const StyledModal = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 99;
  backdrop-filter: blur(5px);
`;

const StyledBody = styled.section`
  width: 100%;
  max-width: 700px;
  background-color: var(--raisin-black);
  margin: 3em auto;
`;

const Modal = ({ isShowing, hide, children, header }) =>
  isShowing
    ? ReactDOM.createPortal(
        <StyledModal>
          <StyledBody className="p-4 rounded-lg shadow-lg">
            <header className="flex items-center justify-between">
              <p className="text-white font-bold">{header}</p>
              <FontAwesomeIcon
                icon={faTimes}
                className="text-white opacity-50 hover:opacity-100 transition-all"
                onClick={hide}
              />
            </header>
            <main className="mt-8">{children}</main>
          </StyledBody>
        </StyledModal>,
        document.body
      )
    : null;

export default Modal;
