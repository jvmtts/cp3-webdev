import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
 
export default function Layout() {
  return (
    <div>
      <header className="header">
        <div className="container header-content">
          <h1 className="logo">Bem-vindo ao <span>Fiap Commerce</span>!</h1>
          <Navbar />
        </div>
      </header>
 
      <main className="container" style={{ marginTop: "40px" }}>
        <Outlet />
      </main>

    </div>
  );
}