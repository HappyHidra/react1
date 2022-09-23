import { useEffect, useState } from "react";

const Advice = () => {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    const url = "https://api.adviceslip.com/advice";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();

        setAdvice(json.slip.advice);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return <h1>{advice}</h1>;
};

export default Advice;
