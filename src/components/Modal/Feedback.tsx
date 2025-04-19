import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setFeedModal } from "../../store/storeSlice/storeSlice";

// import { usePostFeedbackMutation } from "../../store/RTKQuery";
import { toast } from "react-toastify";
import { PulseLoader } from "react-spinners";
import { Rate } from "antd";
import axios from "axios";

const Feedback: React.FC = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useAppDispatch();
  const { feedModal } = useAppSelector((state) => state.storeSlice);
  const [rateValue, setRateValue] = useState(0);

  // const [postFeedback, result] = usePostFeedbackMutation();

  async function handlePostFeedback() {
    setLoading(true);

    // postFeedback({
    //   rate: rateValue,
    //   message: message,
    // });

    // console.log(result);

    try {
      const response = await axios.post(
        `https://qrmenu.celavi.uz/api/feedback/?rating=${rateValue}&message=${message}`
      );

      if (response.status === 200) {
        toast("Отзыв успешно отправлен!", { type: "success" });
        setLoading(false);
        dispatch(setFeedModal(false));
      } else {
        toast("Ошибка отправки отзыва!", { type: "error" });
      }
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }

  const desc = ["Ужасно", "Плохо", "Нормально", "Хорошо", "Замечательна"];

  return (
    <>
      <div className={feedModal ? "modal active" : "modal"}>
        <div className="container">
          <div className="modal-inner">
            <span
              className="closeModal-btn"
              onClick={() => {
                dispatch(setFeedModal(false));
              }}
            >
              &times;
            </span>
            <h1 className="title">Отзыв гостей</h1>
            <form className="feedback-form" onSubmit={e => e.preventDefault()}>
              <div className="question-box">
                <p>Ваше впечатление</p>
                <div className="rating-box">
                  {/* {rateValue ? (
                    <span>{desc[rateValue - 1]}</span>
                  ) : (
                    <span>Оцените</span>
                  )} */}
                  <Rate
                    tooltips={desc}
                    onChange={setRateValue}
                    value={rateValue}
                  />
                </div>
              </div>
              <div className="question-box">
                <p>Ваше предложения и жалобы</p>
                <textarea
                  cols={30}
                  rows={10}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>

              <button disabled={loading} style={loading ? { opacity: .6, cursor: "not-allowed" } : {}} onClick={() => {
                if (!loading) {
                  handlePostFeedback();
                }
              }}>
                {loading ? (
                  <PulseLoader color="#ddd" size={8} speedMultiplier={0.6} />
                ) : (
                  "Оставить отзыв"
                )}
              </button>
            </form>
          </div>
        </div>
      </div >
    </>
  );
};

export default Feedback;
