import React, { useEffect, useState } from "react";
import "./reservationBlock.css";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import { GetChangeManagerList } from "../../api/reservation/getChangeManagerList";
import { ChangeManager } from "../../api/reservation/changeManager";
const ModalLine = ({ name, manid, id, dispatch }) => {
  return (
    <div className="modalline">
      <span className="modalline-name">{name} 매니저</span>
      <div>
        <button className="modalline-detail">상세보기</button>
        <button
          className="modalline-detail"
          onClick={async () => {
            const res = await ChangeManager(id, dispatch, manid);
            if (res.status == 200) {
              alert("매니저가 변경되었습니다.");
              window.location.reload();
            } else {
              alert("매니저 변경에 실패하였습니다.");
            }
          }}
        >
          변경
        </button>
      </div>
    </div>
  );
};

const ReservationBlock = ({
  isbutton,
  id,
  name,
  url,
  num,
  btnName,
  dispatch,
}) => {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [list, setList] = useState([]);
  useEffect(async () => {
    if (id != undefined) {
      const res = await GetChangeManagerList(id);
      console.log("안녕나는 res", res);
      setList(res);
    }
  }, []);

  useEffect(() => {
    console.log("나는 list==", list);
  }, [list]);
  return (
    <div className="reservationblock-square">
      <div className="reservationblock-set">
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
              zIndex: 5,
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
              zIndex: 6,
            },
          }}
        >
          <section className="reservationblock-modalall">
            <span className="reservationblock-modaltitle">
              변경 매니저 선택
            </span>
            <div className="reservationblock-modallist">
              {list &&
                list.map((data, i) => {
                  return (
                    <ModalLine
                      key={i}
                      name={data?.name}
                      manid={data.number}
                      id={id}
                      dispatch={dispatch}
                    />
                  );
                })}
            </div>
            <button
              className="reservationblock-modalbtn"
              onClick={() => setModalIsOpen(false)}
            >
              매니저 변경 취소
            </button>
          </section>
        </Modal>
        <div className="reservationblock-contents">
          <div className="reservationblock-name">{name}</div>
          <div className="reservationblock-nameright">
            <button
              className="reservationblock-button"
              onClick={() => navigate(`${url}/${num}`)}
            >
              {btnName}
            </button>
            {isbutton ? (
              <button
                className="reservationblock-changebtn"
                onClick={() => setModalIsOpen(true)}
              >
                변경
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { ReservationBlock };
