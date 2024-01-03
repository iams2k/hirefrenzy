import React, { useState, useEffect } from "react";
import Header from "./Header";

function Home(props) {
  const serverURL = process.env.REACT_APP_SERVER_URL || process.env.PROXY_URL;

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

      const data = await res.json();
      console.log(data);
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    document.getElementsByClassName("dropdown-toggle")[0].style.userSelect =
      "None";
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
