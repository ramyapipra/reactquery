import { useCallback, useState } from "react";
import ChildCallback from "./ChildCallback";

export default function CallBack() {
  const [data, setData] = useState("Hi ");

  const returnComment = useCallback(
    (name) => {
      return data + name;
    },
    [data]
  );

  return (
    <div className="App">
      {/* <ChildCallback returnComment={returnComment} /> */}

    </div>
  );
}
