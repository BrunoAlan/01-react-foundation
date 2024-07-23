interface Person {
  name: string;
  age: number;
  address: Address;
  isAlive?: boolean;
}

interface Address {
  country: string;
  city: string;
}

export const ObjectLiterals = () => {
  const person: Person = {
    name: "Alan",
    age: 33,
    isAlive: true,
    address: {
      country: "Argentina",
      city: "Buenos Aires",
    },
  };

  return (
    <>
      <h3>ObjectLiterals</h3>
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </>
  );
};
