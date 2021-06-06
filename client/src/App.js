import { useEffect, useState } from "react";
import "./App.css";

const API_URL = "http://localhost:8000";

function App() {
  const [users, setUsers] = useState(null);

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

  return (
    <div className="App">
      {!users && <p>Loading...</p>}
      {users &&
        users.map((user) => {
          return (
            <div key={user.id}>
              <p>{user.name}</p>
              <p>{user.email}</p>
            </div>
          );
        })}
    </div>
  );
}

export default App;
