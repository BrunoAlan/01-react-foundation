import { useForm } from "react-hook-form";

type FormInputs = {
  email: string;
  password: string;
};

export const FormsPage = () => {
  const { register } = useForm<FormInputs>({
    defaultValues: {
      email: "alan.brunoab@gmail.com",
      password: "123456",
    },
  });
  return (
    <>
      <form action="">
        <h3>Formularios</h3>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input type="text" placeholder="Email" {...register("email")} />
          <input type="text" placeholder="Password" {...register("password")} />
          <button type="submit">Login</button>
        </div>
      </form>
    </>
  );
};
