import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Content from "./components/content/Content";
import Header from "./components/header/Header";

function App() {
  const [apodData, setApodData] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?", {
        params: {
          api_key: "kMyi8dgUuZy0DmV6p33XBN4DRdLjGMIJ7GeTabvq",
        },
      })
      .then((response) => {
        console.log("raw-data", response);
        console.log("data", response.data);
        setApodData(response.data);
      })
      .catch((error) => {
        console.warn("Sunucu Bulunamadı", error);
      })
      .finally(() => {
        console.log("loading datas is finished");
      });
  }, []);

  return apodData ? (
    <div className="App">
      <Header />
      <Content apodData={apodData} />
    </div>
  ) : (
    <div>Yükleniyor ....</div>
  );
}

export default App;
