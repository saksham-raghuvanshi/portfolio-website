import React from "react";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import AllRoutes from "../Routes/AllRoutes";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
};

export default Layout;
