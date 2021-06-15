import "./App.css";

import { Count } from './components/Count'
import { UsersList } from './components/UsersList'

export const API_URL = "http://localhost:8000";

function App() {
  return (
    <div className="App">
      <Count />
      <hr />
      <UsersList />
    </div>
  );
}

export default App;
