import React from "react";
import Button from "./button";

type ProjectProps = {
  title: string;
  description: string;
  image: string;
  demoLink: string;
  githubLink: string;
};

export const Project: React.FC<ProjectProps> = ({
  title,
  description,
  image,
  demoLink,
  githubLink,
}) => {
  return (
    <div
      className="w-full h-full min-h-[130px] flex flex-col items-start justify-center gap-4 p-6 group relative"
      style={{
        background: `url('${image}') no-repeat center center`,
        backgroundSize: "cover",
      }}
    >
      <div className="absolute top-0 right-0 left-0 bottom-0 bg-neutral-900 opacity-90 z-10" />
      <div className="flex flex-col w-full gap-2 text-lg font-bold m-0 relative z-20">
        <div className="text-sm font-bold m-0">{title}</div>
        <div className="text-xs font-extralight m-0">{description}</div>
      </div>
      <div className="flex flex-row w-full gap-2 font-light m-0 relative z-20">
        <Button
          text="Demo"
          href={demoLink}
          newTab
          className="w-full text-center text-xs"
        />
        <Button
          text="GitHub"
          href={githubLink}
          newTab
          className="w-full text-center text-xs"
        />
      </div>
    </div>
  );
};
