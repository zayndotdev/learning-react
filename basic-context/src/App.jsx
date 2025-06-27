import { useContext, useState } from "react";
import UserContext from "./context/UserContext";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(UserContext);

  const handleLogin = () => {
    // Simulate a login action
    if (username && password) {
      setUser({ username, password });
      alert(`Welcome, ${username}!`);
    } else {
      alert("Please enter both username and password.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-900 px-4">
      <div className="w-full max-w-sm bg-neutral-800 p-8 rounded-2xl shadow-xl space-y-6">
        <h2 className="text-2xl font-bold text-center text-white">
          Login to Your Account
        </h2>

        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your Username"
          className="w-full px-4 py-3 rounded-lg bg-neutral-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your Password"
          className="w-full px-4 py-3 rounded-lg bg-neutral-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={handleLogin}
          disabled={!username || !password}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
        >
          Login
        </button>

        {user && (
          <div className="mt-8 text-center text-white">
            <h1 className="text-3xl">You are logged in as {user.username}!</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
