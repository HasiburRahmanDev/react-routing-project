import React from "react";
import NavBar from "../components/NavBar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../components/Footer";
import LoadingSpinner from "../components/LoadingSpinner";

const RootLayout = () => {
  const navigation = useNavigation();
  console.log(navigation);

  return (
    <div>
      <NavBar></NavBar>
      {navigation?.state === "loading" ? (
        <LoadingSpinner />
      ) : (
        <main className="min-h-[calc(100vh-420px)]">
          <Outlet />
        </main>
      )}
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
