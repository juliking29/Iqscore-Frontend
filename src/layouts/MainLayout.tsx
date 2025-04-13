import Navbar from '../components/common/Navbar/Navbar.tsx';
import React from "react";
import Footer from '../components/common/footer/Footer.tsx';
import ChatIA from '../components/common/Buttons/ChatIA.tsx';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <div className="overflow-x-hidden">
        <div className="flex flex-col min-h-screen w-full bg-gray-100 dark:bg-[#000000]">
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
          <ChatIA />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
