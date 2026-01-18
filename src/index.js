import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  return <h1>Home!</h1>;
}

function About() {
  return <h1>This is my about component!</h1>;
}

function Login() {
  return (
    <form>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
      </div>

      <input type="submit" value="Login" />
    </form>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);
