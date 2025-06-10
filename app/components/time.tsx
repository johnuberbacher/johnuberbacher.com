import React from "react";

const Card: React.FC = () => {
  const now = new Date();

  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Denver",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
    weekday: "short",
  });

  const parts = formatter.formatToParts(now);
  const hour = parseInt(parts.find(p => p.type === "hour")?.value || "0", 10);
  const weekdayStr = parts.find(p => p.type === "weekday")?.value || "Sun";

  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(weekdayStr);
  const isWeekend = day === 0 || day === 6;
  const isNight = hour >= 22 || hour < 6;
  const isOffHours = isNight || isWeekend;

  let message = "Just doing my thing!";

  if (!isWeekend && hour >= 9 && hour < 17) {
    message = "Hmm... I'm probably clacking away on a keyboard";
  } else if (isNight) {
    message = "Hmm... I'm probably sleeping!";
  } else if (!isWeekend && hour >= 17 && hour < 22) {
    message = "Probably unwinding after a long day";
  } else if (!isWeekend && hour >= 6 && hour < 9) {
    message = "Probably getting ready to start the day";
  } else if (isWeekend && hour >= 9 && hour < 21) {
    message = "Probably enjoying the weekend vibes";
  } else if (isWeekend && (hour < 9 || hour >= 21)) {
    message = "Probably hanging out or sleeping in";
  }

  const timeString =
    now.toLocaleTimeString("en-US", {
      timeZone: "America/Denver",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }) + " MT";

  return (
    <div className="flex h-full flex-col">
      <div className="flex h-full items-center justify-center p-6 font-serif text-3xl">
        {timeString}
      </div>
      <div className="relative z-20 m-0 flex h-full flex-row items-start justify-center gap-3 border-t border-t-neutral-600 p-6 text-sm font-light">
        <span className="relative mt-1 flex h-2 w-2">
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
