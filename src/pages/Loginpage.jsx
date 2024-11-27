import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api/auth";

const Loginpage = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ id, password });
      const token = response?.accessToken;

      navigate("/testpage"); // 페이지 이동
    } catch (err) {
      console.error("로그인 실패:", err.response?.data || err.message); // 에러 로그
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#2f4f4f]">
      <form
        onSubmit={handleLogin}
        className="bg-[#465e69] p-6 rounded-lg shadow-md w-full max-w-sm"
      >
        <h1 className="text-white text-3xl flex items-center justify-center p-5">
          LOGIN
        </h1>

        <div className="mb-7">
          <label
            htmlFor="email"
            className="block text-white font-semibold mb-2"
          ></label>
          <input
            id="id"
            type="id"
            placeholder="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="w-full px-4 py-2 bg-[#465e69] text-white border-b-2 border-white focus:outline-none focus:ring-0 focus:border-blue-400"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-white font-semibold mb-2"
          ></label>
          <input
            id="password"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 bg-[#465e69] text-white border-b-2 border-white focus:outline-none focus:ring-0 focus:border-blue-400"
          />
        </div>

        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

        <button
          type="submit"
          className="w-full bg-[#d6d9dc] flex item-center justify-center text-[#2f4f4f] py-2 rounded-md hover:text-red-500"
        >
          Lets START
        </button>
        <br />
        <Link to="/signuppage" className="text-white-500 hover:text-red-500">
          signup
        </Link>
      </form>
    </div>
  );
};

export default Loginpage;
