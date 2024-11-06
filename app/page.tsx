import Image from "next/image";
import Card from "./components/Card";
import 'material-symbols';

export default function Home() {
  return (
    <div className="text-white m-auto p-2 grid gap-2 max-w-6xl overflow-hidden relative w-full sm:p-4 sm:gap-2 md:grid-cols-2 md:gap-3 md:p-6 lg:h-screen lg:grid-rows-8 lg:grid-cols-4 lg:gap-4 lg:max-h-[800px]">
      <Card colSpan="col-span-1 md:col-span-3" rowSpan="md:row-span-4">
        <div className="flex w-full h-full">
          <div className="flex flex-col justify-between md:max-h-[300px] gap-4 z-1">
            <p className="m-0 font-thin opacity-50 text-sm mb-2">{`{  heya heya  }`}</p>
            <p className="m-0 font-light text-md mb-32">
              Hey, I'm John Uberbacher. I am a self-motivated individual with a
              strong interest in development and design.
              <br />
              <br />
              In short; I work to make the internet a better experience.
            </p>
            <div className="flex flex-row gap-4">
              <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                Github
              </button>
              <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                LinkedIn
              </button>
            </div>
          </div>
          <img
            width="300"
            height="300"
            src="avatar.png"
            className="block w-auto max-h-[300px] select-none absolute right-[-100px] top-[30px] opacity-30 md:opacity-100 
          md:relative md:right-auto md:bottom-auto md:z-auto pointer-events-none"
            alt=""
          />
        </div>
      </Card>
      <Card colSpan="col-span-1 md:col-span-1" rowSpan="md:row-span-6">
        <p>Your custom content goes here</p>
      </Card>
      <Card colSpan="col-span-1 md:col-span-1" rowSpan="md:row-span-4">
        <p>Your custom content goes here</p>
      </Card>
      <Card colSpan="col-span-1 md:col-span-1" rowSpan="md:row-span-1">
        <p>Your custom content goes here</p>
      </Card>
      <Card colSpan="col-span-1 md:col-span-1" rowSpan="md:row-span-1">
        <div className="flex text-2xl items-center justify-center h-full font-serif">
          {new Date().toLocaleString("en-US", {
            timeZone: "America/Denver",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          }) + " MT"}
        </div>
      </Card>
      <Card colSpan="col-span-1 md:col-span-1" rowSpan="md:row-span-1">
        <p>Des Works</p>
      </Card>
      <Card colSpan="col-span-1 md:col-span-1" rowSpan="md:row-span-2">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span>
      </Card>
      <Card colSpan="col-span-1 md:col-span-1" rowSpan="md:row-span-2">
        <p>Your custom content goes here</p>
      </Card>
      <Card colSpan="col-span-1 md:col-span-1" rowSpan="md:row-span-1">
        <p>Github</p>
      </Card>
      <Card colSpan="col-span-1 md:col-span-1" rowSpan="md:row-span-1">
        <p>Your custom content goes here</p>
      </Card>
      <Card colSpan="col-span-1 md:col-span-1" rowSpan="md:row-span-1">
        <p>LinkedIn</p>
      </Card>
    </div>
  );
}
