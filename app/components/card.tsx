import React, { ReactNode } from "react";

interface CardProps {
  colSpan?: string;
  rowSpan?: string;
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({
  colSpan = "col-span-1",
  rowSpan = "md:row-span-2",
  children,
}) => {
  return (
    <div
      className={`overflow-hidden select-none bg-neutral-900 shadow-lg rounded-lg border border-neutral-600 hover:border-blue-500 align-start flex-none h-full justify-start relative w-full transition duration-400 ease-in-out ${colSpan} ${rowSpan}`}
    >
      {children}
    </div>
  );
};

export default Card;
