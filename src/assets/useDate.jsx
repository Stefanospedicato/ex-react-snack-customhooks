import { useEffect, useState } from "react";

const useDate = () => {
  const [date, setDate] = useState("");

  function currentDate() {
    const d = new Date();
    setDate(d.toLocaleString());
  }

  useEffect(() => {
    currentDate();
  }, []);

  return { date };
};

export default useDate;
