import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

const Login = () => {
  const router = useRouter();
  const [login, setLogin] = useState({ email: "", password: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("/api/login", login);
    const res = await response.data;
    sessionStorage.setItem("token", res.token);
    if (res.token) router.push("/admin/addBlog");
  };
  return (
    <>
      <h2 className="text-center display-4">Login</h2>
      <form>
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Example1">
            Email address
          </label>
          <input
            type="email"
            id="form2Example1"
            className="form-control"
            name="email"
            value={login.email}
            onChange={(e) =>
              setLogin({ ...login, [e.target.name]: e.target.value })
            }
          />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
          <input
            type="password"
            id="form2Example2"
            className="form-control"
            name="password"
            value={login.password}
            onChange={(e) =>
              setLogin({ ...login, [e.target.name]: e.target.value })
            }
          />
        </div>

        <button
          type="button"
          className="btn btn-primary btn-block mb-4"
          onClick={handleSubmit}
        >
          Sign in
        </button>

        <div className="text-center">
          <p>
            Not a member? <Link href="/admin/signup">Register</Link>
          </p>
        </div>
      </form>
    </>
  );
};
export default Login;
