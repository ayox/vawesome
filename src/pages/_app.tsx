import { AppProps } from 'next/app'
import '../styles/index.css'
import Head from 'next/head'
import React from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>VAwesome - Explore awesome repositories</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="A new way to view awesome repositories, you can type the github link below to view the list of awesome things."
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
