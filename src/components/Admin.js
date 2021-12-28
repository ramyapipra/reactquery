import React, { useContext } from "react";
import { AppContext } from "./Context";

function Admin() {
  const { setAdmin } = useContext(AppContext);

  return (
    <div>
      <input
        onChange={(event) => {
            setAdmin(event.target.value);
        }}
      />
    </div>
  );
}

export default Admin;
