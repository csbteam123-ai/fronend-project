import React, { useState } from "react";
import { User, Lock, Eye, EyeOff } from "lucide-react";
import { usercreate, userlogin } from "../api/user.api";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import {useDispatch} from "react-redux"
import { setUser } from "../redux/Userslice";

const App = () => {
  const navgit = useNavigate();
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [flsemail, setflsemail] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [fastnae, setFastnae] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleForm = () => setIsLogin(!isLogin);
  const togglePassword = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      const data = {
        email,
        password,
      };
      const res = await userlogin(data);
      console.log(res);
      if ((res.data.error === 334)) {
        return toast.error("username and password not found");
      }

      if (res.data.token) {
        sessionStorage.setItem("token", res.data.token);
        dispatch(setUser(res.data.user));
        toast.success("successful login");
        return navgit("/about");
      }
    } else if (!isLogin) {
      const data = {
        email,
        name: fastnae,
        password,
      };
      const res = await usercreate(data);
      console.log(res);
      if (res.data.token) {
        sessionStorage.setItem("token", res.data.token);
        dispatch(setUser(res.data.user));
        toast.success("successful accout create");

        return navgit("/about");
      }
      if ((res.data.state === 334)) {
        toast.error("email alrady exsis");
        return setflsemail(true);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-black px-4">
      <ToastContainer />
      <div className="w-full max-w-md bg-gray-50 rounded-lg p-6 shadow-md border border-gray-200">
        <h2 className="text-2xl font-bold text-center mb-6">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <User className="mr-2 text-black" />
              <input
                type="text"
                placeholder="Full Name"
                className="bg-transparent w-full text-black placeholder-gray-500 focus:outline-none"
                value={fastnae}
                onChange={(e) => setFastnae(e.target.value)}
                required
              />
            </div>
          )}

          <div
            className={`flex items-center border   rounded-md px-3 py-2 ${flsemail ? "border-red-500" : "border-gray-300"}`}
          >
            <User className="mr-2 text-black" />
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent w-full text-black placeholder-gray-500 focus:outline-none "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 relative">
            <Lock className="mr-2 text-black" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="bg-transparent w-full text-black placeholder-gray-500 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={togglePassword}
              className="absolute right-3 text-gray-600"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white font-semibold py-2 rounded-lg hover:bg-gray-800 transition"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-gray-500 mt-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button onClick={toggleForm} className="text-black underline ml-1">
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default App;
