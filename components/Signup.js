import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import axios from "axios";
import Link from "next/link";
const Signup = () => {
  const router = useRouter();

  const [data, setData] = useState({ name: "", email: "", password: "" });
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) router.push("/admin/login");
  }, []);
  const handlerSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("/api/signup", data);
    const res = await response.data;
    setData({ name: "", email: "", password: "" });
    if (res === "sign up successfully") router.push("/admin/login");
  };
  return (
    <>
      <h2 className="text-center display-4">Sign up</h2>
      <form>
        <div class="form-outline mb-4">
          <label class="form-label" for="form2Example1">
            Full Name
          </label>
          <input
            type="text"
            id="form2Example1"
            class="form-control"
            name="name"
            value={data.name}
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div class="form-outline mb-4">
          <label class="form-label" for="form2Example1">
            Email address
          </label>
          <input
            type="email"
            id="form2Example1"
            class="form-control"
            name="email"
            value={data.email}
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
          />
        </div>

        <div class="form-outline mb-4">
          <label class="form-label" for="form2Example2">
            Password
          </label>
          <input
            type="password"
            id="form2Example2"
            class="form-control"
            name="password"
            value={data.password}
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
          />
        </div>

        <button
          type="button"
          class="btn btn-primary btn-block mb-4"
          onClick={handlerSubmit}
        >
          Sign up
        </button>

        <div class="text-center">
          <p>
            Already have a account? <Link href="/admin/login">log in</Link>
          </p>
        </div>
      </form>
    </>
  );
};

export default Signup;
