import axios from "axios";
import { useEffect, useRef, useState } from "react";
import type { ReqResUserListResponse, User } from "../interfaces";

const loadUsers = async (page: number = 1): Promise<User[]> => {
  try {
    const { data } = await axios.get<ReqResUserListResponse>(
      "https://reqres.in/api/users",
      {
        params: {
          page: page,
        },
      }
    );
    return data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const currentPageRef = useRef(1);

  useEffect(() => {
    loadUsers(currentPageRef.current).then(setUsers);
  }, []);

  const handleNextPage = async () => {
    currentPageRef.current++;
    const users = await loadUsers(currentPageRef.current);
    if (users.length > 0) {
      setUsers(users);
    } else {
      currentPageRef.current--;
    }
  };

  const handlePrevPage = async () => {
    if (currentPageRef.current <= 1) {
      return;
    }
    currentPageRef.current -= 1;
    const users = await loadUsers(currentPageRef.current);
    setUsers(users);
  };

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
