import { useState } from "react";

function AccordiansItem({ item, num, curOpen, setCurOpen }) {
  const { title, text } = item;

  const isOpen = curOpen === num;

  function handleOpen() {
    // setIsOpen((isOpen) => !isOpen);
    setCurOpen(isOpen ? null : num);
  }

  return (
    <>
      <div className={`item  ${isOpen ? "open" : ""}`} onClick={handleOpen}>
        <p className="number">{num <= 9 ? `0${num + 1}` : num + 1}</p>
        <p className="title">{title}</p>
        <p className="icon">{isOpen ? "-" : "+"}</p>
        {isOpen && <div className="content-box">{text}</div>}
      </div>
    </>
  );
}

export default AccordiansItem;
