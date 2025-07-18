"use client";

import { useEffect, useState } from "react";
import { SlidingNumber } from "../ui/sliding-number";

export const OfferCounter = () => {
  const [targetDate] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 7);
    return date;
  });

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex items-center gap-0.5">
      <SlidingNumber
        value={timeLeft.days}
        padStart={true}
        className="bg-destructive text-white font-dosis text-2xl font-semibold py-4 px-3 rounded-md"
      />
      <span>:</span>
      <SlidingNumber
        value={timeLeft.hours}
        padStart={true}
        className="bg-destructive text-white font-dosis text-2xl font-semibold py-4 px-3 rounded-md"
      />
      <span>:</span>
      <SlidingNumber
        value={timeLeft.minutes}
        padStart={true}
        className="bg-destructive text-white font-dosis text-2xl font-semibold py-4 px-3 rounded-md"
      />
      <span>:</span>
      <SlidingNumber
        value={timeLeft.seconds}
        padStart={true}
        className="bg-destructive text-white font-dosis text-2xl font-semibold py-4 px-3 rounded-md"
      />
    </div>
  );
};
