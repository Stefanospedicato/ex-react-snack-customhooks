import { useEffect, useState } from "react";

const useDate = () => {
  const [date, setDate] = useState("");

  function currentDate() {
    const d = new Date();
    setDate(d.toLocaleString());
  }

  useEffect(() => {
    const interval = setInterval(() => {
      currentDate();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return { date };
};

export default useDate;
