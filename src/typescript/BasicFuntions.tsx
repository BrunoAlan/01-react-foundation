export const BasicFuntions = () => {
  const addTwoNumbers = (a: number, b: number): number => {
    return a + b;
  };

  return (
    <>
      <h3>Functions</h3>
      <p>Sum of 2 and 3 is {addTwoNumbers(2, 3)}</p>
    </>
  );
};
