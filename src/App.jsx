import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data)),
      [];
  });
  const handleAddUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name,email}
  }

  
  return (
    <>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder="Your Name" />
        <br />
        <input type="email" name="email" placeholder="Your Email" />
        <br />
        <button type="submit">Add User</button>
      </form>

      <h1>User Management client</h1>
      {users &&
        users.map((user) => (
          <p key={user.id}>
            {user.id}: {user.name}: {user.email}
          </p>
        ))}
    </>
  );
}

export default App;
