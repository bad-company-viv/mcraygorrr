import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import AppRoutes from "@/shared/routes";
import ScrollToHash from "@/shared/ScrollToHash";

const App = () => {
  return (
    <>
      <Header
        logoUrl="/images/mcraygor-logo.jpeg"
      />

      {/* 🔑 THIS IS THE IMPORTANT PART */}
      <main className="pt-[120px] lg:pt-[100px]">
        <ScrollToHash />
        <AppRoutes />
      </main>

      <Footer />
    </>
  );
};

export default App;