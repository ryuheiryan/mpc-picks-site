import React, { useState, useEffect } from "react";
import TimerBox from "./TimerBox";

interface timeProps {
  days: number | string;
  hours: number | string;
  minutes: number | string;
  seconds: number | string;
}

export default function Timer({ days, hours, minutes, seconds }: timeProps) {
  let daysFlip = false;
  let hoursFlip = false;
  let minutesFlip = false;
  let secondsFlip = true;

  if (
    Number(seconds) <= 0 &&
    Number(minutes) <= 0 &&
    Number(hours) <= 0 &&
    Number(days) <= 0
  ) {
    daysFlip = false;
    hoursFlip = false;
    minutesFlip = false;
    secondsFlip = false;
  }

  if (seconds == 0) {
    if (minutes != 0) {
      seconds = 59;
    }

    secondsFlip = false;
    minutesFlip = true;
  }
  if (minutes == 0) {
    if (hours != 0) {
      minutes = 59;
    }

    minutesFlip = false;
    hoursFlip = true;
  }

  if (hours == 0) {
    hoursFlip = false;
    if (days != 0) {
      daysFlip = true;
    }
  }

  if (Number(days) < 10) {
    days = "0" + days;
  }

  if (Number(hours) < 10) {
    hours = "0" + hours;
  }

  if (Number(minutes) < 10) {
    minutes = "0" + minutes;
  }

  if (Number(seconds) < 10) {
    seconds = "0" + seconds;
  }

  return (
    <div className="">
      <div className="grid grid-cols-2 gap-4 px-10 md:flex md:items-center md:justify-between rounded-xl md:px-6 pb-8 ">
        <TimerBox num={days} unit="DAYS" flip={daysFlip} />
        <span className=" hidden text-5xl -mt-8 md:inline-block md:text-7xl font-normal text-gray-50 ">
          :
        </span>
        <TimerBox num={hours} unit="HRS" flip={hoursFlip} />
        <span className="hidden text-5xl -mt-8 md:inline-block md:text-7xl font-normal text-gray-50 ">
          :
        </span>
        <TimerBox num={minutes} unit="MINS" flip={minutesFlip} />
        <span className="hidden text-5xl -mt-8 md:inline-block md:text-7xl font-normal text-gray-50 ">
          :
        </span>
        <TimerBox num={seconds} unit="SECS" flip={secondsFlip} />
      </div>
    </div>
  );
}
