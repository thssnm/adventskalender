import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";
import { CalendarItem } from "../components/CalendarItem";
import { numbers } from "../components/numbers";
import Snowfall from "react-snowfall";

export default function Home() {
  const [count, setCount] = React.useState(0);

  const showSnow = new Date().getMonth() === 11;

  return (
    <div className={styles.container}>
      <Head>
        <title>Kaffee Netz Adventskalender</title>
      </Head>
      <main
        className={styles.main}
        style={{
          height: "20vh",
        }}
      >
        {showSnow ? <Snowfall /> : null}
        {count > 9 && (
          <p style={{ position: "absolute", top: 0 }}>god mode activated!</p>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 24,
            color: "white",
          }}
        >
          <h1 onClick={() => setCount(count + 1)}>Kaffee-Netz</h1>
        </div>
        <h2
          style={{
            marginTop: -24,
            color: "white",
          }}
        >
          Adventskalender 2023
        </h2>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            maxWidth: "80%",
            minWidth: 370,
            height: "60%",
            minHeight: 500,
          }}
        >
          {numbers.map((item) => {
            return <CalendarItem key={item.number} item={item} count={count} />;
          })}
        </div>
      </main>
    </div>
  );
}
