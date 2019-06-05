import React, { Fragment } from "react";
import styled, {css} from "styled-components";
import Backdrop from "../Backdrop";

const Modal = ({ children, isVisible, modalClosed }) => {
  return (
    <Fragment>
      <Backdrop show={isVisible} onClick={modalClosed}/>
      <Modal.Container isVisible={isVisible}>
        {children}
      </Modal.Container>
    </Fragment>
  )
}

Modal.Container = styled.div`
  ${({
    isVisible
  }) => css`
    position: fixed;
    z-index: 500;
    background-color: white;
    width: 70%;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px black;
    padding: 16px;
    left: 15%;
    top: 30%;
    box-sizing: border-box;
    transition: all 0.3s ease-out;
    transform: ${isVisible ? "translateY(0)" : "translateY(-100vh)"};
    opacity: ${isVisible ? "1" : "0"};

    @media (min-width: 600px) {
      width: 500px;
      left: calc(50% - 250px);
    }`
}`

export default Modal;
