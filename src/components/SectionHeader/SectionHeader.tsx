import React from "react";
import { FiPhone } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { useAppDispatch } from "../../store/hooks";
import { setFeedModal } from "../../store/storeSlice/storeSlice";
import { FaInstagram, FaTelegram } from "react-icons/fa";

const SectionHeader: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="section-header">
      <div className="container">
        <div className="infos">
          <div>
            <div className="infos-top">
              <span>

                <a href="tel:+998942679009">
                  <FiPhone color="#ffb300" fontSize={22} />
                  +998 94 267 90 09
                </a>
              </span>
              <span>
                <a href="https://t.me/edison_nukusbot">
                  <FaTelegram color="#ffb300" fontSize={22} />
                  @edison_nukusbot
                </a>
              </span>
            </div>
            <div className="infos-top">
              <span>
                <GrLocation color="#ffb300" fontSize={22} />
                г.Нукус
              </span>
              <span>
                <a href="https://www.instagram.com/edison_restaurant/">
                  <FaInstagram color="#ffb300" fontSize={22} />
                  Instagram
                </a>
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
