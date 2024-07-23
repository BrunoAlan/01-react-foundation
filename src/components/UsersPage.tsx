import axios from "axios";
import { useEffect } from "react";

export const UsersPage = () => {
  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((response) => console.log(response.data));
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
          <tr>
            <td>avatar</td>
            <td>name</td>
            <td>email</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
