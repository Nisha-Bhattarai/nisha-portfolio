import React, { useState } from "react";
import "./App.css";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavSidebar from "./components/navSidebar/NavSidebar";
import FinInvestmentsInc from "./pages/projects/FinInvestmentsInc";
import Amazon from "./pages/projects/Amazon";
import Byob from "./pages/projects/Byob";
import Covid from "./pages/projects/Covid";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/fin"
          element={
            <Layout>
              <FinInvestmentsInc />
            </Layout>
          }
        />
        <Route
          path="/amazon"
          element={
            <Layout>
              <Amazon />
            </Layout>
          }
        />
        <Route
          path="/byob"
          element={
            <Layout>
              <Byob />
            </Layout>
          }
        />
        <Route
          path="/covid"
          element={
            <Layout>
              <Covid />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
