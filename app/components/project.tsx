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
      className="group relative flex h-full min-h-[130px] w-full flex-col items-start justify-center gap-4 p-6"
      style={{
        background: `url('${image}') no-repeat center center`,
        backgroundSize: "cover",
      }}
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 z-10 bg-neutral-900 opacity-90" />
      <div className="relative z-20 m-0 flex w-full flex-col gap-2 text-lg font-bold">
        <div className="m-0 text-sm font-bold">{title}</div>
        <div className="m-0 text-sm font-extralight">{description}</div>
      </div>
      <div className="relative z-20 m-0 flex w-full flex-row gap-2 font-light">
        {demoLink && (
          <Button
            text="Demo"
            href={demoLink}
            newTab
            className="text-center text-xs"
          />
        )}

        <Button
          text="GitHub"
          href={githubLink}
          newTab
          className="text-center text-xs"
        />
      </div>
    </div>
  );
};
