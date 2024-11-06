import React from "react";

const Card = ({
  colSpan = "col-span-1",
  rowSpan = "md:row-span-2",
  children,
}) => {
  return (
    <div
      className={`overflow-hidden bg-neutral-900 shadow-lg rounded-lg border border-neutral-600 hover:border-blue-500 align-start flex-none h-full justify-start relative w-full transition duration-75 ease-in-out ${colSpan} ${rowSpan} p-6`}
    >
      <div className="flex flex-row gap-2">
      {children}
      <span className="material-symbols-outlined select-none cursor-pointer">open_in_new</span>
      </div>
    </div>
  );
};

export default Card;
