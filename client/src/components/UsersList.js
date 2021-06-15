import { useEffect, useState } from "react";
import { API_URL } from '../App'

/**
 * This is an example of a componet doing a GET request
 */
export function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`${API_URL}/users`);
        const json = await res.json();
        setUsers(json);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);


  if (!users) return <p>Loading...</p>

  return (
    users.map((user) => {
      return (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      );
    })
  );
}