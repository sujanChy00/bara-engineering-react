"use client";

import { useEffect, useState } from "react";
import { SlidingNumber } from "../ui/sliding-number";

export const OfferCounter = () => {
  const [days, setDays] = useState(new Date().getDate());
  const [hours, setHours] = useState(new Date().getHours());
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [seconds, setSeconds] = useState(new Date().getSeconds());

  useEffect(() => {
    const interval = setInterval(() => {
      setDays(new Date().getDate());
      setHours(new Date().getHours());
      setMinutes(new Date().getMinutes());
      setSeconds(new Date().getSeconds());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex items-center gap-0.5">
      <SlidingNumber
        value={days}
        padStart={true}
        className="bg-destructive text-white font-dosis text-2xl font-semibold py-4 px-3 rounded-xs"
      />
      <span>:</span>
      <SlidingNumber
        value={hours}
        padStart={true}
        className="bg-destructive text-white font-dosis text-2xl font-semibold py-4 px-3 rounded-xs"
      />
      <span>:</span>
      <SlidingNumber
        value={minutes}
        padStart={true}
        className="bg-destructive text-white font-dosis text-2xl font-semibold py-4 px-3 rounded-xs"
      />
      <span>:</span>
      <SlidingNumber
        value={seconds}
        padStart={true}
        className="bg-destructive text-white font-dosis text-2xl font-semibold py-4 px-3 rounded-xs"
      />
    </div>
  );
};
