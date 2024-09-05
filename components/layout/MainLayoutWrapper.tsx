import React, { ReactNode } from "react";
import Header from "../sections/Header";
import Sidebar from "../sections/Sidebar";
import Navigation from "../sections/Navigation";

function MainLayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <section className="w-full h-[100vh] py-2 flex flex-col justify-between items-center bg-white-primary">
      <Header />
      <main className="flex flex-row justify-center lg:justify-end w-full h-full overflow-hidden">
        {children}
        <Sidebar />
      </main>
      <Navigation />
    </section>
  );
}

export default MainLayoutWrapper;
