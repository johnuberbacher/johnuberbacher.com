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
}) => (
  <div className={`tile h-full w-full flex-none ${colSpan} ${rowSpan}`}>
    <div className="tile-inner">{children}</div>
  </div>
);

export default Card;
