import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";
import { CalendarItem } from "../components/CalendarItem";
import { numbers } from "../components/numbers";
import { numbersDev } from "../components/numbersDev";
import Snowfall from "react-snowfall";
import Link from "@mui/joy/Link";

import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import { Typography } from "@mui/material";

export let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function Home() {
  const [count, setCount] = React.useState(0);

  // ---- toggle bevor pushing -----
  const devmode = false;
  // ---- toggle bevor pushing -----

  const items = devmode ? numbersDev : numbers;

  const showSnow = new Date().getMonth() === 11 || devmode;

  return (
    <div className={styles.container}>
      <Head>
        <title>Kaffee Netz Adventskalender</title>
        <meta name="robots" content="noindex" />
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
        <div className={styles.wrapper}>
          <ThemeProvider theme={theme}>
            <Typography
              onClick={() => setCount(count + 1)}
              variant="h2"
              style={{ marginBottom: 22 }}
            >
              Kaffee-Netz
            </Typography>
          </ThemeProvider>
        </div>
        <ThemeProvider theme={theme}>
          <Typography variant="h3" style={style}>
            Adventskalender 2023
          </Typography>
        </ThemeProvider>
        <div className={styles.grid}>
          {items.map((item) => {
            return (
              <CalendarItem
                key={item.number}
                item={item}
                count={count}
                devmode={devmode}
              />
            );
          })}
        </div>
        <Link
          underline="always"
          color="primary"
          style={{ marginTop: 100 }}
          href="imprint"
        >
          Impressum
        </Link>
      </main>
    </div>
  );
}

const style = {
  marginTop: -24,
  color: "white",
};
