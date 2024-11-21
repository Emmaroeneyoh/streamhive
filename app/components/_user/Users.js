import axios from "axios";
import { useState, useEffect } from "react";

const api = process.env.NEXT_PUBLIC_API_URL;

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const getUsers = async () => {
      try {
        const response = axios.get(`${api}/user`, {
          signal: controller.signal,
        });
        console.log(response.data);
        isMounted && setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getUsers();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <article>
      <h2>User</h2>
      {users?.length ? (
        <ul>
          {users.map((user, i) => (
            <li>{user?.username}</li>
          ))}
        </ul>
      ) : (
        <p>No users to display</p>
      )}
    </article>
  );
};

export default Users;
