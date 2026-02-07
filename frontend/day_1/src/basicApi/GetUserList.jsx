import { useEffect, useState } from "react";

const GetUserList = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    fetch("/api/find")
      .then((res) => {
        console.log(res);
        
        if (!res.ok) {
          throw new Error("Failed to fetch users");
        }
        return res.json();
      })
      .then((data) =>
       setUser(data.output))
      .catch((err) => console.error(err.message));
  }, []); 

  return (
 <ul>
 {}
  {users.map((x) => (
    <li key={x._id}>
      <p>ID: {x._id}</p>
      <p>Name: {x.name}</p>
      <p>Email: {x.email}</p>
      <p>Role: {x.role}</p>
    </li>
  ))}
</ul>

  );
};

export default GetUserList;
