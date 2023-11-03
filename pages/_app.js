import '../styles/globals.css'
import '@mantine/core/styles.css';



import { MantineProvider, createTheme } from '@mantine/core';

const theme = createTheme({
  /** Put your mantine theme override here */
});

function MyApp({ Component, pageProps }) {
  return <MantineProvider forceColorScheme='dark' theme={theme} defaultColorScheme="dark">
    <Component {...pageProps} />
  </MantineProvider>
}



export default MyApp
