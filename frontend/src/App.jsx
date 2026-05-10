import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";   // ✅ add this

import Home from "./pages/Home";
import Buy from "./pages/Buy";
import Sell from "./pages/Sell";
import Activity from "./pages/Activity";
import About from "./pages/About";
import Auth from "./pages/Auth";
import Payment from "./pages/Payment";
import ForgotPasswordfrom from "./pages/ForgotPassword";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/about" element={<About />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/forgot-password" element={<ForgotPasswordfrom />} />
      </Routes>

      <Footer />  {/* ✅ THIS FIXES EVERYTHING */}
    </>
  );
}