"use client";

import { useState } from "react";
import Image from "next/image"; // Correct default import

const FormModal = ({ table, type, data, id }: { 
  table: "teacher" | "student" | "user"; 
  type: "create" | "update" | "delete"; 
  data?: any; 
  id?: number; 
}) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-lamaYellow"
      : type === "update"
      ? "bg-lamaSky"
      : "bg-lamaSkyLight";
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Button to trigger modal */}
      <button
        onClick={() => setOpen(true)} // Add onClick to toggle modal
        className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
      >
        <Image src={`/${type}`} alt="" width={16} height={16} />
      </button>

      {/* Modal content */}
      {open && (
        <div className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
            hello
          </div>

          {/* Close button */}
          <div
            className="absolute top-4 right-4 cursor-pointer"
            onClick={() => setOpen(false)} // Add onClick to close the modal
          >
            <Image src="/close.png" alt="Close" width={14} height={14} />
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
