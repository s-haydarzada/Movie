import React from "react";

const Weekdays = ({day}) => {

  return (
    <div className="text-gray-400 hover:underline underline-offset-8 decoration-orange-400 decoration-2 w-5">
      <h3>{day.name}</h3>
    </div>
  );
};

export default Weekdays;
