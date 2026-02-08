import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();

        if (!email || !password) {
            alert("All fields required");
            return;
        }

        const res = await fetch("/api/signin", { method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({email,password}), });

        if (!res.ok) {
  // Read the response as text first to see the HTML error page
        const errorText = await res.text();
        console.error("Server Error Response:", errorText);
        return;
}
        const data = await res.json();
        console.log(data);
        

        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);

        navigate("/userList");

        console.log(email, password);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
