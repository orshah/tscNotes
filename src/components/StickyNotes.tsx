import React, { useState, useEffect } from "react";
import Btn from "../img/button.jpg";
import Modal from "./Modal";

const StickyNotes = () => {
  const [inputModal, setInputModal] = useState<boolean>(false);
  const [note, setNote] = useState<string>("");
  const [notes, setNotes] = useState<string[]>(() => {
    const saveNotes = localStorage.getItem("notes");
    if (saveNotes) {
      return JSON.parse(saveNotes);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const onClickHandler = (): void => {
    setNotes([...notes, note]);
    setNote("");
  };

  const onChangeHandler = (e) => {
    setNote(e.target.value);
  };
  console.log(note);

  return (
    <div className=" z-0 ">
      <h1 className=" text-center text-5xl my-3">STICKY WALL</h1>
      <div className=" flex justify-center">
        <div className=" flex flex-row flex-wrap gap-2 justify-center ">
          {notes.map((el) => {
            return (
              <h1 className=" text-4xl font-semi-bold font-press-start shadow-2xl flex border-solid border-2  w-[250px] h-[250px] overflow-auto px-3 break-all rounded-md">
                {el}
              </h1>
            );
          })}
          <label htmlFor="addNote">
            <img
              src={Btn}
              alt="plus button"
              className=" w-[250px] h-[250px] cursor-pointer rounded-md"
            />
          </label>
          <button id="addNote" onClick={() => setInputModal(true)}></button>
          <Modal
            open={inputModal}
            onClose={() => setInputModal(false)}
            onChange={onChangeHandler}
            value={note}
            btnClick={onClickHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default StickyNotes;
