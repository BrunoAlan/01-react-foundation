import type { User } from "../interfaces";
import { useUser } from "../hooks/useUser";
import { UserRow } from "./UserRow";

export const UsersPage = () => {
  const { users, handleNextPage, handlePrevPage } = useUser();

  return (
    <>
      <h3>Users Page</h3>
      <table>
        <thead>
          <tr>
            <th>Avatr</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: User) => (
            <UserRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={handlePrevPage}>Prev</button>
        <button onClick={handleNextPage}>Next</button>
      </div>
    </>
  );
};
