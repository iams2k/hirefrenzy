import React, { useState, useEffect } from "react";
import Header from "./Header";
const serverURL = process.env.REACT_APP_SERVER_URL || process.env.PROXY_URL;

function Home(props) {
  const [userData, setUserData] = useState({});

  const callAboutPage = async () => {
    try {
      const res = await fetch(`${serverURL}/userData`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch");
      }

      const data = await res.json();
      console.log(data);
      setUserData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);
  return (
    <>
      <Header />
      <h1 className="text-center mt-5">Welcome, {userData.userName}!</h1>
    </>
  );
}

export default Home;
