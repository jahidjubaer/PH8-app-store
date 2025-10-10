import React from "react";

import AppBarChart from "./AppBarChart";
import AppDetailsCard from "./AppDetailsCard";

const AppDetails = () => {
  return (
    <div className="bg-gray-100 p-20">
      {/* container  */}
      <div className="w-11/12 lg:w-10/12 mx-auto">
        {/* card */}
        <AppDetailsCard></AppDetailsCard>

        <div className="divider"></div>

        {/* bar chart  */}
      </div>
      <AppBarChart></AppBarChart>

      <div className="w-11/12 lg:w-10/12 mx-auto">
        <h1 className=" text-2xl font-semibold text-[#001931] ">Description</h1>
        <p className=" text-[#627382] text-xl ">
          This focus app takes the proven Pomodoro technique and makes it even
          more practical for modern lifestyles. Instead of just setting a timer,
          it builds a complete environment for deep work, minimizing
          distractions and maximizing concentration. Users can create custom
          work and break intervals, track how many sessions they complete each
          day, and review detailed statistics about their focus habits over
          time. The design is minimal and calming, reducing cognitive load so
          you can focus entirely on the task at hand. Notifications gently let
          you know when to pause and when to resume, helping you maintain a
          healthy rhythm between work and rest. A unique feature of this app is
          the integration of task lists with timers. You can assign each task to
          a specific Pomodoro session, making your schedule more structured. The
          built-in analytics show not only how much time you’ve worked but also
          which tasks consumed the most energy. This allows you to reflect on
          your efficiency and adjust your workflow accordingly. The app also
          includes optional background sounds such as white noise, nature
          sounds, or instrumental music to create a distraction-free atmosphere.
          For people who struggle with procrastination, the app provides
          motivational streaks and achievements. Completing multiple Pomodoro
          sessions unlocks milestones, giving a sense of accomplishment. This
          gamified approach makes focusing more engaging and less like a chore.
          Whether you’re studying for exams, coding, writing, or handling office
          work, the app adapts to your routine. By combining focus tracking,
          task management, and motivational tools, this Pomodoro app ensures
          that you not only work harder but also smarter. It is a personal
          trainer for your brain, keeping you disciplined, refreshed, and
          productive throughout the day.
        </p>
      </div>
    </div>
  );
};

export default AppDetails;
