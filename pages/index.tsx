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
      <main className={styles.main}>
        {showSnow ? <Snowfall /> : null}
        {count > 9 && (
          <p style={{ position: "absolute", top: 0 }}>god mode activated!</p>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "2em",
            marginTop: 24,
            color: "white",
          }}
        >
          <p onClick={() => setCount(count + 1)}>Kaffee-Netz</p>
        </div>
        <p
          style={{
            fontSize: "1.2em",
            marginTop: -24,
            color: "white",
          }}
        >
          Adventskalender 2023
        </p>
        <div
          style={{
            backgroundSize: "cover",
            opacity: 0.8,
            borderRadius: 12,
          }}
        >
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              maxWidth: 450,
              minWidth: 370,
            }}
          >
            {numbers.map((item) => {
              return (
                <CalendarItem key={item.number} item={item} count={count} />
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
