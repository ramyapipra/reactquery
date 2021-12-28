import React, { useEffect } from "react";

function ChildCallback({ returnComment }) {
  useEffect(() => {
    console.log("Function is running");
  }, [returnComment]);

  return <div>{returnComment("Ram")}</div>;
}

export default ChildCallback;
