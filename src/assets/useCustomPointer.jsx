import React, { useState } from "react";

const useCustomPointer = () => {
  const [pointer, setPointer] = useState("");

  return { customPointer, pointer };
};

export default useCustomPointer;
