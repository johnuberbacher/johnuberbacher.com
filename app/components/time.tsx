import React from "react";

interface CardProps {}

const Card: React.FC<CardProps> = ({}) => {
  const dateStr = new Date().toLocaleString("en-US", {
    timeZone: "America/Denver",
  });

  const currentDate = new Date(dateStr);
  const hours = currentDate.getHours();
  const day = currentDate.getDay();
  const isWeekend = day === 0 || day === 6;
  const isNight = hours >= 22 || hours < 6;
  const isOffHours = isNight || isWeekend;

  let message = "Just doing my thing!";

  if (!isWeekend && hours >= 9 && hours < 17) {
    message = "I'm probably clacking away on a keyboard!";
  } else if (isNight) {
    message = "Hmm... I'm probably sleeping!";
  } else if (!isWeekend && hours >= 17 && hours < 22) {
    message = "Unwinding after a long day 🛋️";
  } else if (!isWeekend && hours >= 6 && hours < 9) {
    message = "Getting ready to start the day ☕";
  } else if (isWeekend && hours >= 9 && hours < 21) {
    message = "Enjoying the weekend vibes ✨";
  } else if (isWeekend && (hours < 9 || hours >= 21)) {
    message = "Probably chilling or sleeping in 😴";
  }

  const timeString =
    currentDate.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }) + " MT";

  return (
    <div className="h-full flex flex-col">
      <div className="h-full flex text-3xl items-center justify-center font-serif p-6">
        {timeString}
      </div>
      <div className="h-full flex flex-row gap-3 items-start justify-center text-xs font-light m-0 relative p-6 border-t border-t-neutral-600 z-20">
        <span className="flex h-2 w-2 relative mt-1">
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full ${
              isOffHours ? "bg-red-400" : "bg-green-400"
            } opacity-90`}
          ></span>
          <span
            className={`relative inline-flex rounded-full h-2 w-2 ${
              isOffHours ? "bg-red-500" : "bg-green-500"
            }`}
          ></span>
        </span>
        {message}
      </div>
    </div>
  );
};

export default Card;
