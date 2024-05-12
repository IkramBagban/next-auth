"use client";

import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignupPage = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const inputChangeHandler = (e: any) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const signupHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);

      if (response.status === 201) {
        router.push("/login");
      }

      console.log("signup response", response);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold text-center text-white mb-6">
          Sign Up
        </h2>
        <form onSubmit={signupHandler}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-white text-sm font-semibold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={inputChangeHandler}
              value={user.username}
              className="bg-gray-700 appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-white text-sm font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={inputChangeHandler}
              value={user.email}
              className="bg-gray-700 appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-white text-sm font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={inputChangeHandler}
              value={user.password}
              className="bg-gray-700 appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
          >
            Sign Up
          </button>
          <p className="mt-4 text-center text-white">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500 hover:text-blue-300">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
