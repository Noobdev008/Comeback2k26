import { useEffect, useState } from "react";

const GetUserList = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("/api/find")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch users");
        }
        return res.json();
      })
      .then((data) => setUser(data.user))
      .catch((err) => console.error(err.message));
  }, []); // ✅ run once

  return (
    <ul>
      {user.map((x) => (
        <li key={x._id}>
          {x.name}
        </li>
      ))}
    </ul>
  );
};

export default GetUserList;
