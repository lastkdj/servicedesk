import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

const NewDialog = () => {
  const { setFirstLog } = useContext(AuthContext);

  const onClick = () => {
    setFirstLog(false);
  };

  return (
    <div>
      <h1>Welcome message, and stepper with guides</h1>
      <button onClick={onClick}>Skip</button>
    </div>
  );
};

export default NewDialog;
