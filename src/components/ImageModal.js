import React, { useState, useEffect } from "react";

function ImageModal({
  projectImage,
  projectImageAlt,
  setCloseModal,
  modalClosed,
}) {
  const [displayClass, setDisplayClass] = useState("hidden");

  useEffect(() => {
    setDisplayClass(() => modalClosed);
  }, []);

  function setModalDisplayClass() {
    setDisplayClass("hidden");
    console.log(displayClass);
  }

  return (
    <div
      className={`${displayClass} fixed mx-auto w-4/5 bg-white border-4 border-[#305065] rounded drop-shadow bottom-20 w-4/5`}
    >
      <div
        onClick={setModalDisplayClass}
        className="flex place-content-end text-black cursor-pointer"
      >
        <span>🆇</span>
      </div>
      <img src={projectImage} width="100%" />
    </div>
  );
}

export default ImageModal;
