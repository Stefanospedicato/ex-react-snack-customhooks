import React, { useState } from "react";

const useSwitch = () => {
  const [isOn, setIsOn] = useState(true);

  function toggle() {
    setIsOn(!isOn);
    return isOn;
  }

  return { isOn, toggle };
};

export default useSwitch;
