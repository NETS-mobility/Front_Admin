import React, { useState } from "react";
import "./reservationBlock.css";
import Modal from "react-modal";

const ModalLine = ({ name }) => {
  return (
    <div className="modalline">
      <span className="modalline-name">{name} 매니저</span>
      <div>
        <button className="modalline-detail">상세보기</button>
        <button className="modalline-detail">변경</button>
      </div>
    </div>
  );
};

const ReservationBlock = ({ isbutton, name, btnName }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="reservationblock-square">
      <div className="reservationblock-set">
        {isbutton ? (
          <>
            <button
              className="reservationblock-changebtn"
              onClick={() => setModalIsOpen(true)}
            >
              변경
            </button>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={() => setModalIsOpen(false)}
              style={{
                overlay: {
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(115, 115, 115, 0.61)",
                },
                content: {
                  position: "absolute",
                  width: "50%",
                  height: "90%",
                  top: "20px",
                  left: "500px",
                  right: "433px",
                  bottom: "9px",
                  border: "1px solid #ccc",
                  background: "#fff",
                  WebkitOverflowScrolling: "touch",
                  borderRadius: "30px",
                  outline: "none",
                  padding: "20px",
                },
              }}
            >
              <section className="reservationblock-modalall">
                <span className="reservationblock-modaltitle">
                  변경 매니저 선택
                </span>
                <div className="reservationblock-modallist">
                  <ModalLine name="원지우" />
                  <ModalLine name="투지우" />
                  <ModalLine name="삼지우" />
                  <ModalLine name="포지우" />
                  <ModalLine name="오지우" />
                  <ModalLine name="육지우" />
                  <ModalLine name="박지우" />
                  <ModalLine name="박지우" />
                  <ModalLine name="박지우" />
                  <ModalLine name="박지우" />
                  <ModalLine name="박지우" />
                </div>
                <button
                  className="reservationblock-modalbtn"
                  onClick={() => setModalIsOpen(false)}
                >
                  매니저 변경 취소
                </button>
              </section>
            </Modal>
          </>
        ) : (
          <div className="reservationblock-nonebtn" />
        )}
        <div className="reservationblock-contents">
          <div className="reservationblock-profile" />
          <div className="reservationblock-name">{name}</div>
          <button className="reservationblock-button">{btnName}</button>
        </div>
      </div>
    </div>
  );
};

export { ReservationBlock };
