import { Outlet } from "react-router";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer/Footer";



function RootLayout() {
  return (
    <>
    <Navigation />
    <Outlet />
    <Footer />
    </>
  )
}

export default RootLayout;
