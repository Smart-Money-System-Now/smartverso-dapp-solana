import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React,{useEffect, useState} from "react";

export default function Home() {
  const [tikets, setTikets] = useState([]);
  const TIKETS = ["https://media4.giphy.com/media/QnU6mOrBbElaIQz4Fe/giphy.gif","https://media4.giphy.com/media/4KFvuA2LmYYVv46CNN/giphy.gif"];
  useEffect(() => {
    setTikets(TIKETS);
  });
  return (
    <div className="flex justify-center">
      <div className="px-4" style={{ maxWidth: "1600px" }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {tikets.map((tikets, i) => (
            <div key={i} className="border shadow rounded-xl overflow-hidden">
              <img style={{ height: "20rem" }} src={tikets} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
