import React from "react";
import { FiPhone } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { useAppDispatch } from "../../store/hooks";
import { setFeedModal } from "../../store/storeSlice/storeSlice";

const SectionHeader: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="section-header">
      <div className="container">
        <div className="infos">
          <div>
            <div className="infos-top">
              <span>
                <FiPhone color="#ffb300" fontSize={22} />
                <a href="tel:+998953848484">+998 95 384 84 84</a>
              </span>
              <span>
                <FiPhone color="#ffb300" fontSize={22} />
                <a href="tel:+998934959226">+998 93 495 92 26</a>
              </span>
            </div>
            <div className="infos-btm">
              <span>
                <GrLocation color="#ffb300" fontSize={22} />
                г.Нукус
              </span>
            </div>
          </div>
          <button
            className="btn"
            onClick={() => {
              dispatch(setFeedModal(true));
            }}
          >
            Оставить отзыв
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
