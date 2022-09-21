import React from "react";
import './Modal.css';

const Modal = ({value, dealModal}) => {
  // const { title,thumbnail, author, content } = value;
  return (
    <div id="modal">
      <div className="top-bar">
      <i onClick={dealModal} className="fa-solid fa-xmark"></i>
      </div>
      <div className="image-container">
        <img src='' alt="img"></img>
      </div>
      <div className="details">
        <h5>sddsdfg</h5>
      
        <p>sfgsdfg</p>
      </div>
      <div className="author">
      <img src='' alt="Img"></img>
        <p>asdfasdf : asdfasdf</p>
      </div>
    </div>
  );
};

export default Modal;