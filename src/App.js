import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/header/Header";
import Contents from "./components/content/Contents";

function App() {
  const [apodData, setApodData] = useState(null);
  const [startDate, setStartDate] = useState("2023-10-20");
  const [endDate, setEndtDate] = useState("2023-10-26");

  const setStart = (evt) => {
    const { value } = evt.target;
    setStartDate(value);
  };

  const setEnd = (evt) => {
    const { value } = evt.target;
    setEndtDate(value);
  };
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?", {
        params: {
          api_key: "kMyi8dgUuZy0DmV6p33XBN4DRdLjGMIJ7GeTabvq",
          start_date: startDate,
          end_date: endDate,
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
  }, [startDate, endDate]);

  return apodData ? (
    <div className="App">
      <Header startDate={setStart} endDate={setEnd} />
      <Contents apodData={apodData} />
    </div>
  ) : (
    <p>sayfa yükleniyor...</p>
  );
}

export default App;
