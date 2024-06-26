import React, { useState } from "react";
import styles from "../../styles/Editpage/ToolBar.module.css";
import styledBox from "../../styles/boxFramer.module.css";
import { RiArrowGoBackFill, RiArrowGoForwardFill } from "react-icons/ri";
import {
  HiOutlineMenu,
  HiOutlineMenuAlt2,
  HiOutlineMenuAlt3,
} from "react-icons/hi";
import ColorPalette from "./ColorPalette";

export const ToolBar = () => {
  const [fontSize, setFontSize] = useState(12);
  const handleFontSizeChange = (e) => {
    setFontSize(Number(e.target.value));
  };
  const [showColorPalette, setShowColorPalette] = useState(false);
  const toggleColorPalette = () => {
    setShowColorPalette(!showColorPalette);
  };

  return (
    <div className={`${styledBox.F_RowBox} ${styles.ToolBox}`}>
      {/* 제어 관련 기능 */}
      <section className={`${styledBox.F_RowBox} ${styles.controlBox}`}>
        {/* 작업 뒤로가기 기능 */}
        <button>
          <RiArrowGoBackFill />
        </button>
        {/* 작업 앞으로 가기 기능 */}
        <button>
          <RiArrowGoForwardFill />
        </button>
      </section>
      {/* 폰트 관련 기능 */}
      <section className={`${styledBox.F_RowBox} ${styles.fontBox}`}>
        {/* 폰트 크기 조절 기능 */}
        <label>
          <input
            type="number"
            value={fontSize}
            onChange={handleFontSizeChange}
            min="8"
            max="72"
          />
        </label>
        {/* Bold체 만들기 기능 */}
        <button>
          <b>B</b>
        </button>
        {/* 폰트 기울임 기능 */}
        <button>
          <em>T</em>
        </button>
        {/* 폰트 밑줄 기능 */}
        <button>
          <u>A</u>
        </button>
        {/* 폰트 배경색 기능 */}
        <button>
          <div
            style={{
              padding: "0 6px",
              backgroundColor: "yellow",
            }}
          >
            T
          </div>
        </button>
        {/* 글자색 기능 */}
        <button
          onClick={toggleColorPalette}
          style={{ backgroundColor: "black" }}
        ></button>
        {showColorPalette && (
          <ColorPalette setShowColorPalette={setShowColorPalette} />
        )}
      </section>

      {/* 정렬 관련 기능 / 해당 기능은 textArea의 내용물 통째로 조절되도록 할 것 */}
      <section className={`${styledBox.F_RowBox} ${styles.ArrayBox}`}>
        {/* 텍스트 좌로 정렬 */}
        <button>
          <HiOutlineMenuAlt2 />
        </button>
        {/* 텍스트 좌로 정렬 */}
        <button>
          <HiOutlineMenu />
        </button>
        {/* 텍스트 우로 정렬 */}
        <button>
          <HiOutlineMenuAlt3 />
        </button>
      </section>
    </div>
  );
};

export default ToolBar;
