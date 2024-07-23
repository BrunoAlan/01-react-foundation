import axios from "axios";
import { useEffect, useState } from "react";
import type { ReqResUserListResponse, User } from "../interfaces";

const loadUsers = async (): Promise<User[]> => {
  try {
    const { data } = await axios.get<ReqResUserListResponse>(
      "https://reqres.in/api/users"
    );
    return data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    loadUsers().then(setUsers);
  }, []);

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
    </>
  );
};

interface Props {
  user: User;
}

export const UserRow = ({ user }: Props) => {
  const { avatar, email, first_name, last_name } = user;
  return (
    <tr>
      <td>
        <img style={{ width: "50px" }} src={avatar} alt={first_name} />
      </td>
      <td>
        {first_name} {last_name}
      </td>
      <td>{email}</td>
    </tr>
  );
};
