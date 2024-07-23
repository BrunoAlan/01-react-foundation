export const BasicTypes = () => {
  const name: string = "Alan";
  const age: number = 33;
  const isActive: boolean = true;
  const powers: string[] = ["React", "Angular", "Vue"];

  return (
    <>
      <div>BasicTypes</div>
      {name}
      {age}
      {isActive ? "Active" : "Inactive"}
      <br />
      {powers.join(", ")}
    </>
  );
};
