import Button from "./components/button";
import Card from "./components/card";
import "material-symbols";

export default function Home() {
  return (
    <div className="text-white m-auto p-4 md:p-8 lg:pt-14 gap-4 max-w-4xl overflow-hidden relative w-full">
      <Card colSpan="h-full flex flex-row items-center">
        <div className="flex h-full flex-col justify-between p-8 md:p-6 md:pl-20 gap-4 z-1">
          <p className="m-0 font-extralight opacity-50 text-sm mb-2">{` `}</p>
          <p className="m-0 font-extralight text-md mb-12">
            Hey, I'm <span className="font-bold">John Uberbacher</span>. I am a
            self-motivated individual with a strong interest in development and
            design.
            <br />
            <br />
            In short; I work to make the internet a better experience.
          </p>
          <div className="flex flex-row flex-wrap gap-4 z-10">
            <Button
              text="LinkedIn"
              href="https://www.linkedin.com/in/johnuberbacher/"
              newTab={true}
            />
            <Button
              text="GitHub"
              href="https://github.com/johnuberbacher"
              newTab={true}
            />
          </div>
        </div>
        <div
          style={{ backgroundImage: "url(" + "avatar.png" + ")" }}
          className="aspect-square block md:pt-6 md:w-full md:h-full max-h-[380px] select-none absolute right-[-87px] left-auto top-0 bottom-0 opacity-30 md:opacity-100 
          md:relative md:right-auto md:bottom-auto md:z-auto pointer-events-none bg-cover bg-center"
        ></div>
      </Card>
    </div>
  );
}
