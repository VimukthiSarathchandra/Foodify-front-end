import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import SignInPage from "./pages/sign-in.page";
import { BrowserRouter, Route, Routes } from "react-router";
import SignUpPage from "./pages/sign-up.page";
import HomePage from "./pages/home.page";
import RootLayout from "./layouts/root.layout";
import PricingPage from "./pages/pricing.page";
import AboutPage from "./pages/about.page";
import FoodsPage from "./pages/foods.page";
import CartPage from "./pages/cart.page";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/foods" element={<FoodsPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
