import React, { useState } from "react";

const FormStates = (initialvalue) => {
  const [value, setValue] = useState(initialvalue);

  const onChange = (ev) => setValue(ev.target.value);

  return {
    value,
    onChange: onChange,
  };
};

export default FormStates;
