import React from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  btnClick: () => void;
}

const Modal = (props: ModalProps) => {
  const { open, onClose, onChange, value, btnClick } = props;
  if (!open) return null;
  return (
    <div className="overlay absolute flex justify-center">
      <div className=" flex flex-col border-solid border-2 rounded-md w-[400px] my-[200px] shadow-2xl">
        <p className=" font-bold self-end cursor-pointer p-2" onClick={onClose}>
          ✖️
        </p>
        <div className="content flex flex-col px-1">
          <input
            onChange={onChange}
            value={value}
            type="text"
            className=" block px-2  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <button
            onClick={btnClick}
            className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 my-3"
          >
            Add note
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
