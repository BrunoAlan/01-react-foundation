import { useState } from "react";

interface Options {
  initValue?: number;
}

export const useCounter = ({ initValue = 0 }: Options) => {
  const [count, setCount] = useState<number>(initValue);

  const increaseBy = (value: number) => {
    setCount(count + value);
  };

  return {
    //Properties
    count,
    //Methods
    increaseBy,
  };
};
