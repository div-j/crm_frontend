import { useState, useContext } from "react";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    navigate("/");
  };

  return (
    <section className="flex justify-between items-center h-screen">
      <div className="hidden sm:block w-[60%]">
        <img
          src="/assets/login_background.png"
          alt="login"
          className="w-full"
        />
      </div>
      <div className="md:w-[40%] w-full p-10">
        <h1 className="text-center font-bold mb-10">Login into your account</h1>
        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="email" className="text-sm block mb-2 text-gray-500">
              Email Id :
            </label>
            <div className="flex items-center bg-[#eeeeee] mb-5 rounded-md">
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full p-1 px-4 text-xs bg-transparent outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <AiOutlineMail size={45} className="bg-[#1E2772] p-2 text-white rounded-md" />
            </div>
          </section>
          <section>
            <label htmlFor="password" className="text-sm block mb-2 text-gray-500">
              Password
            </label>
            <div className="flex items-center bg-[#eeeeee] mb-5 rounded-md">
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full p-1 px-4 text-xs bg-transparent outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <AiOutlineLock size={45} className="bg-[#1E2772] p-2 text-white rounded-md" />
            </div>
          </section>
          <button className="bg-[#1E2772] text-white cursor-pointer p-2 px-4 rounded-md w-full">
            Login
          </button>
        </form>
        <section className="my-10 text-gray-400 text-xs flex items-center gap-2 justify-center w-full">
          <hr className="w-full" />
          <p className="text-xs">OR</p>
          <hr className="w-full" />
        </section>
        <button className="btn border-[#1E2772] text-[#1E2772] p-2 px-4 rounded-md w-full">
          Signup now
        </button>
      </div>
    </section>
  );
}
